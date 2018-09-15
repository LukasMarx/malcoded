<template>
<div style="width: 100%">
    <v-card class="codeview-card">
        <v-toolbar card dense class="codeview-toolbar" v-bind:style="{ 'background-color': (primaryColor || '#c3002f' ) + '!important' }" v-if="title && title !== 'null' && title !== 'undefined' || (language!=='undefined' && language!=='null')">
          <div class="codeview-icon" v-if="language && language!==null">
            <svg slot="activator" v-if="language==='javascript'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path stroke="white" fill="none" d="M1.408 1.408h125.184v125.185h-125.184z"/><path fill="white" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>
            <svg v-if="language==='typescript'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#fff;}.cls-2{fill:{{primaryColor || '#c3002f'}}; stroke:#fff}</style></defs><g id="original"><rect class="cls-1" x="22.67" y="47" width="99.67" height="73.67"/><path id="original-2" data-name="original" class="cls-2" d="M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"/></g></svg>
            <svg v-if="language==='html'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="none" stroke="#fff" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"/><path fill="none" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"/><path fill="#fff" stroke="#fff" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>
            <svg v-if="language==='css'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="none" stroke="#fff" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/><path fill="none" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"/></svg>
          </div>
          <div class="title-wrapper">
            <span  v-if="title && title !== 'null' && title !== 'undefined'" class="codeview-title">{{title}}</span>
          </div>
        </v-toolbar>

        <div style="padding: 16px">
        <pre class="pre"  v-html="hlCode(code)">
        </pre>
        </div>


    </v-card>
</div>
</template>

<script>
import * as hljs from 'highlight.js/lib/highlight';
import * as javascript from 'highlight.js/lib/languages/javascript';
import { typescript } from './typescript';
import * as xml from 'highlight.js/lib/languages/xml';
import * as scss from 'highlight.js/lib/languages/scss';
import * as json from 'highlight.js/lib/languages/json';

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
  props: ['code', 'language', 'title', 'primaryColor'],
  methods: {
    hlCode(code) {
      let result = hljs.highlightAuto(code);

      return hljs.fixMarkup(result.value);
      //return result.value;
    }
  }
};
</script>

<style>
.codeview-card {
  margin-bottom: 32px;
}
.codeview-wrapper {
  margin-bottom: 32px;
}
.codeview-icon {
  width: 48px;
  padding: 8px;
  float: left;
}
.codeview-toolbar {
  background-color: #c3002f;
  color: white !important;
  padding-left: 16px;
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
  margin-left: 8px;
  line-height: 48px;
  font-size: 1.2em;
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