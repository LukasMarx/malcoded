<template>
    <div v-html="compileMarkdown(input)" class="wrapper"></div>
    
</template>

<script>
import myMarked from 'marked';
import * as hljs from 'highlight.js/lib/highlight';
import * as javascript from 'highlight.js/lib/languages/javascript';
import { typescript } from './typescript';
import * as xml from 'highlight.js/lib/languages/xml';
import * as scss from 'highlight.js/lib/languages/scss';
import * as json from 'highlight.js/lib/languages/json';
import * as insane from 'insane';

hljs.registerLanguage('json', json);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('scss', scss);

hljs.configure({
  tabReplace: '    ',
  languages: ['typescript', 'html', 'scss', 'json'],

  useBR: true
});

export default {
  props: ['input'],
  methods: {
    compileMarkdown(markdown) {
      if (!markdown) return;

      const renderer = new myMarked.Renderer();
      renderer.code = (code, language, escaped) => {
        let c = hljs.highlightAuto(code);
        let x = hljs.fixMarkup(c.value);
        return `
        <pre class="comment-pre">${x}
        </pre>`;
      };

      renderer.codespan = (code, language, escaped) => {
        let c = hljs.highlightAuto(code);
        let x = hljs.fixMarkup(c.value);
        return `
        <pre class="comment-pre">${c}
        </pre>`;
      };

      myMarked.setOptions({
        renderer: renderer,
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });

      return insane(myMarked(markdown, { renderer: renderer }), {
        allowedTags: ['div', 'h1', 'h2', 'h3', 'h4', 'pre', 'p', 'span', 'br', 'b', 'strong', 'em', 'del', 'ol', 'ul', 'li', 'hr'],
        allowedAttributes: { span: ['class'], pre: ['class'] }
      });
      return myMarked(markdown, renderer);
    }
  }
};
</script>

<style >
.wrapper {
  overflow: auto;
}

.comment-pre {
  width: 100%;
}
</style>
