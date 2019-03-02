<template>
  <div v-html="compileMarkdown(input)" class="wrapper"></div>
</template>

<script>
import myMarked from "marked";
import Prism from "prismjs";
import * as insane from "insane";

export default {
  props: ["input"],
  methods: {
    compileMarkdown(markdown) {
      if (!markdown) return;

      const renderer = new myMarked.Renderer();
      renderer.code = (code, language, escaped) => {
        let c = Prism.highlight(code, Prism.languages.tsx);

        return `
        <pre class="comment-pre">${c}
        </pre>`;
      };

      renderer.codespan = (code, language, escaped) => {
        let c = Prism.highlight(code, Prism.languages.tsx);

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
        allowedTags: [
          "div",
          "h1",
          "h2",
          "h3",
          "h4",
          "pre",
          "p",
          "span",
          "br",
          "b",
          "strong",
          "em",
          "del",
          "ol",
          "ul",
          "li",
          "hr"
        ],
        allowedAttributes: { span: ["class"], pre: ["class"] }
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
