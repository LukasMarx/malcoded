<script>
import { QuillRenderer } from './renderer.js';
import codeview from '~/components/codeview.vue';
import progressiveimage from '~/components/progressiveImage.vue';

export default {
  components: {
    codeview,
    progressiveimage
  },
  props: ['input'],
  render(createElement) {
    if (!this.input) return null;
    const delta = JSON.parse(this.input.content);

    const elements = [];
    const renderer = new QuillRenderer();
    const nodes = renderer.render(delta);
    nodes.forEach(node => {
      if (node.tag === 'codeview') {
        elements.push(
          createElement(codeview, {
            props: {
              code: node.content,
              title: node.attributes.src,
              language: node.attributes.lang
            }
          })
        );
      } else if (node.tag === 'img') {
        elements.push(
          createElement(progressiveimage, {
            props: {
              src: node.attributes.src,
              alt: node.attributes.alt
            }
          })
        );
      } else {
        const newElement = createElement(node.tag, {
          domProps: { innerHTML: node.content },
          class: node.class,
          attrs: node.attributes
        });

        elements.push(newElement);
      }
    });
    return createElement('div', elements);
  }
};
</script>
<style>

</style>

