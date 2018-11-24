<template>
<div style="width: 100%">
    <v-card class="codeview-card">
        <v-toolbar card dense class="codeview-toolbar" v-bind:style="{ 'background-color': ( '#1a2335' ) + '!important' }" v-if="title && title !== 'null' && title !== 'undefined' || (language!=='undefined' && language!=='null')">
          <div class="codeview-icon" v-bind:style="{ 'background-color': (primaryColor || '#c40030' ) + '!important' }">
            <img width="48" height="48" style="padding: 8px" v-if="language==='typescript'" src="/icons/ts.svg"/>  
            <img width="48" height="48" style="padding: 8px" v-if="language==='javascript'" src="/icons/js.svg"/>  
            <img width="48" height="48" style="padding: 3px" v-if="language==='html'" src="/icons/html.svg"/>  
            <img width="48" height="48" style="padding: 3px" v-if="language==='css'" src="/icons/css.svg"/>  
            <img width="48" height="48" style="padding: 8px" v-if="!language || language==='null'" src="/icons/malcoded-icon-white.svg"/>
          </div>
          <div class="title-wrapper">
            <span  v-if="title && title !== 'null' && title !== 'undefined'" class="codeview-title">{{title}}</span>
          </div>
        </v-toolbar>

        <div style="padding: 16px">
        <pre class="pre"  v-html="hlCode">
        </pre>
        </div>


    </v-card>
</div>
</template>

<script>
import * as hljs from "highlight.js/lib/highlight";
import * as javascript from "highlight.js/lib/languages/javascript";
import { typescript } from "./typescript";
import * as xml from "highlight.js/lib/languages/xml";
import * as scss from "highlight.js/lib/languages/scss";
import * as json from "highlight.js/lib/languages/json";

hljs.registerLanguage("json", json);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("scss", scss);

hljs.configure({
  tabReplace: "    ",
  languages: ["typescript", "html", "scss", "json"],

  useBR: true
});

export default {
  props: ["code", "language", "title", "primaryColor"],
  computed: {
    hlCode() {
      if (this.code) {
        let result = hljs.highlightAuto(this.code);
        return hljs.fixMarkup(result.value);
      }
    }
  }
};
</script>

<style>
.v-card {
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
}
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
  padding: 8px;
  display: flex;
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
  white-space: pre-wrap;
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
.application.theme--light .hljs-comment,
.application.theme--light .hljs-quote {
  color: #a0a1a7;
  font-style: italic;
}
.application.theme--light .hljs-doctag,
.application.theme--light .hljs-keyword,
.application.theme--light .hljs-attribute,
.application.theme--light .hljs-formula {
  color: #c3002f;
  /* color: #c3002f; */
  /* color: #a626a4; */
}

.application.theme--light .hljs-title {
  color: #303f9f;
}

.application.theme--light .hljs-section,
.application.theme--light .hljs-name,
.application.theme--light .hljs-selector-tag,
.application.theme--light .hljs-deletion,
.application.theme--light .hljs-subst {
  color: #e45649;
}
.application.theme--light .hljs-literal {
  color: #0184bb;
}
.application.theme--light .hljs-string,
.application.theme--light .hljs-regexp,
.application.theme--light .hljs-addition,
.application.theme--light .hljs-meta-string {
  color: rgb(0, 141, 42);
  /* color: #50a14f; */
}
.application.theme--light .hljs-built_in,
.application.theme--light .hljs-class .application.theme--light .hljs-title {
  color: #6945a4;
  /* color: #c18401; */
}
.application.theme--light .hljs-type {
  color: orange;
}

.application.theme--light .hljs-meta {
  color: #8539ff;
}

.application.theme--light .hljs-attr,
.application.theme--light .hljs-variable,
.application.theme--light .hljs-template-variable,
.application.theme--light .hljs-selector-class,
.application.theme--light .hljs-selector-attr,
.application.theme--light .hljs-selector-pseudo,
.application.theme--light .hljs-number {
  color: orange;
}
.application.theme--light
  .hljs-symbol
  .application.theme--light
  .hljs-bullet
  .application.theme--light
  .hljs-link
  .application.theme--light
  .hljs-meta
  .application.theme--light
  .hljs-selector-id
  .application.theme--light
  .hljs-title {
  color: #6945a4;
  /* color: #4078f2; */
}
/* DARK */
.application.theme--dark .hljs-comment,
.application.theme--dark .hljs-quote {
  color: #a0a1a7;
  font-style: italic;
}
.application.theme--dark .hljs-doctag,
.application.theme--dark .hljs-keyword,
.application.theme--dark .hljs-formula {
  color: #ff6589;
  /* color: #a626a4; */
}
.application.theme--dark .hljs-section,
.application.theme--dark .hljs-name,
.application.theme--dark .hljs-selector-tag,
.application.theme--dark .hljs-deletion,
.application.theme--dark .hljs-subst {
  color: #fd5151;
}
.application.theme--dark .hljs-literal {
  color: #76d6ff;
}
.application.theme--dark .hljs-string,
.application.theme--dark .hljs-regexp,
.application.theme--dark .hljs-addition,
.application.theme--dark .hljs-attribute,
.application.theme--dark .hljs-meta-string {
  color: rgb(248, 201, 113);
  /* color: #50a14f; */
}
.application.theme--dark .hljs-built_in,
.application.theme--dark .hljs-class .application.theme--dark .hljs-title {
  color: #c9a7ff;
  /* color: #c18401; */
}
.application.theme--dark .hljs-attr,
.application.theme--dark .hljs-variable,
.application.theme--dark .hljs-template-variable,
.application.theme--dark .hljs-type,
.application.theme--dark .hljs-selector-class,
.application.theme--dark .hljs-selector-attr,
.application.theme--dark .hljs-selector-pseudo,
.application.theme--dark .hljs-number {
  color: #e6e35d;
}
.application.theme--dark
  .hljs-symbol
  .application.theme--dark
  .hljs-bullet
  .application.theme--dark
  .hljs-link
  .application.theme--dark
  .hljs-meta
  .application.theme--dark
  .hljs-selector-id
  .application.theme--dark
  .hljs-title {
  color: #a371f3;
  /* color: #4078f2; */
}
.hljs-emphasis {
  font-style: italic;
}
.hljs-strong {
  font-weight: bold;
}
.hljs-link {
  text-decoration: underline;
}
</style>