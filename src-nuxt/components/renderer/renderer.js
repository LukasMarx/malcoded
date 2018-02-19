import * as Delta from 'quill-delta';

// export class QNode {
//   tag;
//   content;
//   attributes;
// }

const closures = {
  header: (attr, value) => {
    return { tag: 'h' + (attr + 1), content: value };
  },
  'my-code-block': (attr, value) => {
    return { tag: 'codeview', content: value, attributes: JSON.parse(attr) };
  }
};

const inlines = {
  link: (attr, value) => {
    return {
      tag: 'a',
      attributes: { href: attr },
      content: value,
      class: { link: true }
    };
  }
};

const blocks = {
  image: (attr, value) => {
    return {
      tag: 'img',
      attributes: {
        src:
          'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/' +
          attr,
        alt: attr
      },
      class: { 'inline-image': true }
    };
  }
};

export class QuillRenderer {
  render(d) {
    const delta = new Delta();
    delta.ops = d.ops;
    let nodes = [];
    delta.eachLine((line, closureAttributes, i) => {
      const result = this.parseOperations(line.ops, closureAttributes);
      if (result) {
        nodes = nodes.concat(result);
      }
    });
    return this.postProcess(nodes);
  }

  createNodeFromAttributes(closureAttributes, value) {
    for (let key in closureAttributes) {
      if (closures[key]) {
        const result = closures[key](closureAttributes[key], value);
        result.closure = true;
        return result;
      }
    }
    return { tag: 'span', content: value, class: { text: true } };
  }

  createInlineFromAttributes(elementAttributes, value) {
    for (let key in elementAttributes) {
      if (inlines[key]) {
        const result = inlines[key](elementAttributes[key], value);
        result.closure = false;
        return result;
      }
    }
    return { tag: 'span', content: value, class: { text: true } };
  }

  createBlockFromAttributes(elementAttributes, value) {
    for (let key in elementAttributes) {
      if (blocks[key]) {
        const result = blocks[key](elementAttributes[key], value);
        result.closure = false;
        return result;
      }
    }
    return { tag: 'span', content: value, class: { text: true } };
  }

  parseOperations(ops, closureAttributes) {
    if (ops && ops.length > 0) {
      const nodes = [];
      ops.forEach(operation => {
        nodes.push(this.parseOperation(operation, closureAttributes));
      });
      if (nodes[0].tag !== 'codeview') nodes.push(this.createNewLine());
      return nodes;
    } else {
      return [this.createNewLine()];
    }
  }

  parseOperation(operation, closureAttributes) {
    if (Object.keys(closureAttributes).length > 0) {
      return this.createNodeFromAttributes(closureAttributes, operation.insert);
    } else {
      if (typeof operation.insert === 'string') {
        return this.createInlineFromAttributes(
          operation.attributes,
          operation.insert
        );
      } else {
        return this.createBlockFromAttributes(operation.insert);
      }
    }
  }

  createNewLine() {
    return { tag: 'br' };
  }

  postProcess(nodes) {
    const result = [];
    let prevTag;
    let toMerge;
    nodes.forEach(node => {
      if (
        node.tag === 'codeview' ||
        (node.tag === 'br' && prevTag === 'codeview')
      ) {
        if (toMerge) {
          toMerge.content += '\n';
          if (node.content) toMerge.content += node.content;
        } else {
          toMerge = node;
        }
      } else {
        if (toMerge) {
          result.push(toMerge);
          toMerge = null;
        }
        result.push(node);
      }
      prevTag = node.tag;
    });
    return result;
  }
}
