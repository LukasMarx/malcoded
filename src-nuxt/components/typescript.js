/*
Language: TypeScript
Author: Panu Horsmalahti <panu.horsmalahti@iki.fi>
Contributors: Ike Ku <dempfi@yahoo.com>
Description: TypeScript is a strict superset of JavaScript
Category: scripting
Modified by Lukas Marx
*/

export function typescript(hljs) {
  var KEYWORDS = {
    keyword:
      'in if for while finally var new function do return void else break catch ' +
      'instanceof with throw case default try this switch continue typeof delete ' +
      'let yield const class public private protected get set super ' +
      'static implements enum export import declare type namespace abstract ' +
      'as from extends async await',
    literal: 'true false null undefined NaN Infinity',
    built_in:
      'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +
      'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +
      'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +
      'TypeError URIError Number Math Date String RegExp Array Float32Array ' +
      'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +
      'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +
      'module console window document any number boolean string void Promise'
  };

  var TYPE_IDENT_RE = ':\\s*' + hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '(\\s*,\\s*' + hljs.IDENT_RE + ')*>)?(\\[\\])?';

  return {
    aliases: ['ts'],
    keywords: KEYWORDS,
    contains: [
      {
        begin: TYPE_IDENT_RE + ';',
        excludeEnd: true,
        returnBegin: true,
        contains: [
          {
            className: 'type',
            begin: ':\\s*',
            end: ';',
            excludeBegin: true,
            excludeEnd: true
          }
        ],
        relevance: 0
      },
      {
        className: 'meta',
        begin: /^\s*['"]use strict['"]/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        // template string
        className: 'string',
        begin: '`',
        end: '`',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            className: 'subst',
            begin: '\\$\\{',
            end: '\\}'
          }
        ]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'number',
        variants: [{ begin: '\\b(0[bB][01]+)' }, { begin: '\\b(0[oO][0-7]+)' }, { begin: hljs.C_NUMBER_RE }],
        relevance: 0
      },
      {
        // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + hljs.IDENT_RE + ')\\s*=>',
            returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: hljs.IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: ['self', hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
                  }
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        beginKeywords: 'constructor',
        end: /\{/,
        excludeEnd: true,
        contains: [
          'self',
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              {
                begin: TYPE_IDENT_RE,
                returnBegin: true,
                contains: [
                  {
                    className: 'type',
                    begin: ':\\s*',
                    end: /,|\)/,
                    returnEnd: true,
                    excludeBegin: true,
                    excludeEnd: false
                  }
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        begin: hljs.IDENT_RE + '\\s*\\(',
        end: /[{;=]/,
        returnBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS,
        contains: [
          {
            begin: hljs.IDENT_RE + '\\s*\\(',
            returnBegin: true,
            contains: [hljs.TITLE_MODE],
            relevance: 0
          },
          {
            className: 'params',
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            relevance: 0,
            contains: [
              {
                begin: TYPE_IDENT_RE + '\\s*\\)',
                returnBegin: true,

                contains: [
                  {
                    className: 'type',
                    begin: ':\\s*',
                    end: /,|\)/,
                    returnEnd: true,
                    excludeBegin: true,
                    excludeEnd: false
                  }
                ]
              },
              {
                begin: TYPE_IDENT_RE + '\\s*,',
                returnBegin: true,

                contains: [
                  {
                    className: 'type',
                    begin: ':\\s*',
                    end: /,|\)/,
                    returnEnd: true,
                    excludeBegin: true,
                    excludeEnd: false
                  }
                ]
              }
            ]
          }
        ],
        relevance: 0 // () => {} is more typical in TypeScript
      },
      {
        // prevent references like module.id from being higlighted as module definitions
        begin: /module\./,
        keywords: { built_in: 'module' },
        relevance: 0
      },
      {
        beginKeywords: 'module',
        end: /\{/,
        excludeEnd: true
      },
      {
        beginKeywords: 'interface',
        end: /\{/,
        excludeEnd: true,
        keywords: 'interface extends'
      },
      {
        begin: /\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      },
      {
        begin: '\\.' + hljs.IDENT_RE,
        relevance: 0 // hack: prevents detection of keywords after dots
      },
      {
        className: 'meta',
        begin: '@[A-Za-z]+'
      }
    ]
  };
}
