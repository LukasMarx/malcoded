<template>
  <div style="width: 100%;">
    <v-card class="codeview-card">
      <v-toolbar
        card
        dense
        class="codeview-toolbar"
        v-bind:style="{ 'background-color': ( '#1a2335' ) + '!important' }"
        v-if="title && title !== 'null' && title !== 'undefined' || (language!=='undefined' && language!=='null')"
      >
        <div
          class="codeview-icon"
          v-bind:style="{ 'background-color': (primaryColor || '#c40030' ) + '!important' }"
        >
          <img width="48" height="48" v-if="language==='typescript'" src="/icons/ts.svg">
          <img width="48" height="48" v-if="language==='tsx'" src="/icons/ts.svg">
          <img width="48" height="48" v-if="language==='javascript'" src="/icons/js.svg">
          <img width="48" height="48" v-if="language==='jsx'" src="/icons/js.svg">
          <img width="48" height="48" v-if="language==='html'" src="/icons/html.svg">
          <img width="48" height="48" v-if="language==='css'" src="/icons/css.svg">
          <img
            width="48"
            height="48"
            v-if="!language || language==='null'"
            src="/icons/malcoded-icon-white.svg"
          >
        </div>
        <div class="title-wrapper">
          <span
            v-if="title && title !== 'null' && title !== 'undefined'"
            class="codeview-title"
          >{{title}}</span>
        </div>
      </v-toolbar>

      <div style="padding: 32px">
        <pre class="pre" v-html="hlCode"></pre>
      </div>
    </v-card>
  </div>
</template>

<script>
import Prism from "prismjs";

export default {
  props: ["code", "language", "title", "primaryColor"],
  computed: {
    hlCode() {
      if (this.code && this.language !== "null") {
        console.log(this.language);
        let result = Prism.highlight(this.code, Prism.languages[this.language]);
        return result;
      } else {
        return this.escapeHtml(this.code);
      }
    }
  },
  methods: {
    escapeHtml(unsafe) {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }
  }
};
</script>

<style>
.codeview-card {
  margin-bottom: 64px;
  margin-top: 32px;
}
.codeview-wrapper {
  margin-bottom: 32px;
}
.codeview-icon {
  width: 48px;
  height: 48px;
  display: absolute;
  justify-content: center;
  align-items: center;
}
.codeview-toolbar {
  background-color: #c3002f;
  color: white !important;
  padding-left: 16px;
  overflow: hidden;
}
.pre {
  width: 100%;
  font-size: 1.1em;
  white-space: pre-wrap;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}
.codeview-content {
  overflow-x: auto;
  text-align: left;
}
.codeview-title {
  margin-left: 32px;
  line-height: 48px;
  font-style: italic;
}
.codeview-content-wrapper {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-left: 1px;
  margin-right: 1px;
  padding: 32px;
}
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #383a42;
  background: #fafafa;
}
code[class*="language-"],
pre[class*="language-"] {
  color: #c5c8c6;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Inconsolata, Monaco, Consolas, "Courier New", Courier, monospace;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #1d1f21;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #7c7c7c;
}

.token.punctuation {
  color: #c5c8c6;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.keyword,
.token.tag {
  color: #96cbfe;
}

.token.class-name {
  color: #ffffb6;
  text-decoration: underline;
}

.token.boolean,
.token.constant {
  color: #99cc99;
}

.token.symbol,
.token.deleted {
  color: #f92672;
}

.token.number {
  color: #ff73fd;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #a8ff60;
}

.token.variable {
  color: #c6c5fe;
}

.token.operator {
  color: #ededed;
}

.token.entity {
  color: #ffffb6;
  /* text-decoration: underline; */
}

.token.url {
  color: #96cbfe;
}

.language-css .token.string,
.style .token.string {
  color: #87c38a;
}

.token.atrule,
.token.attr-value {
  color: #f9ee98;
}

.token.function {
  color: #dad085;
}

.token.regex {
  color: #e9c062;
}

.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.application.theme--light code[class*="language-"],
.application.theme--light pre[class*="language-"] {
  font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono",
    "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono",
    "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L",
    "Courier New", Courier, monospace;
  font-size: 14px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: #f5f7ff;
  color: #5e6687;
}

.application.theme--light pre[class*="language-"]::-moz-selection,
.application.theme--light pre[class*="language-"] ::-moz-selection,
.application.theme--light code[class*="language-"]::-moz-selection,
.application.theme--light code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #dfe2f1;
}

.application.theme--light pre[class*="language-"]::selection,
.application.theme--light pre[class*="language-"] ::selection,
.application.theme--light code[class*="language-"]::selection,
.application.theme--light code[class*="language-"] ::selection {
  text-shadow: none;
  background: #dfe2f1;
}

/* Code blocks */
.application.theme--light pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

/* Inline code */
.application.theme--light :not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
}

.token.function {
  color: #6679cc;
}

.token.builtin {
  color: #c08b30;
}

.application.theme--light .token.comment,
.application.theme--light .token.prolog,
.application.theme--light .token.doctype,
.application.theme--light .token.cdata {
  color: #898ea4;
}

.application.theme--light .token.punctuation {
  color: #5e6687;
}

.application.theme--light .token.namespace {
  opacity: 0.7;
}

.application.theme--light .token.operator,
.application.theme--light .token.boolean,
.application.theme--light .token.number {
  color: #c76b29;
}

.application.theme--light .token.property {
  color: #c08b30;
}

.application.theme--light .token.class-name {
  color: #c94922;
  text-decoration: underline;
}
.application.theme--light .token.tag {
  color: #3d8fd1;
}

.application.theme--light .token.string {
  color: #22a2c9;
}

.application.theme--light .token.selector {
  color: #6679cc;
}

.application.theme--light .token.attr-name {
  color: #c76b29;
}

.application.theme--light .token.entity,
.application.theme--light .token.url,
.application.theme--light .language-css .token.string,
.application.theme--light .style .token.string {
  color: #22a2c9;
}

.application.theme--light .token.attr-value,
.application.theme--light .token.keyword,
.application.theme--light .token.control,
.application.theme--light .token.directive,
.application.theme--light .token.unit {
  color: #ac9739;
}

.application.theme--light .token.statement,
.application.theme--light .token.regex,
.application.theme--light .token.atrule {
  color: #22a2c9;
}

.application.theme--light .token.placeholder,
.application.theme--light .token.variable {
  color: #3d8fd1;
}

.application.theme--light .token.deleted {
  text-decoration: line-through;
}

.application.theme--light .token.inserted {
  border-bottom: 1px dotted #202746;
  text-decoration: none;
}

.application.theme--light .token.italic {
  font-style: italic;
}

.application.theme--light .token.important,
.application.theme--light .token.bold {
  font-weight: bold;
}

.application.theme--light .token.important {
  color: #c94922;
}

.application.theme--light .token.entity {
  cursor: help;
}

.application.theme--light pre > code.highlight {
  outline: 0.4em solid #c94922;
  outline-offset: 0.4em;
}
</style>