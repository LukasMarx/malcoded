<template>
<nuxt-link :to="{ path: '/'}" title="Home">
<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate; height:100%" viewBox="0 0 173.75 52.75" width="173.75" height="52.75">
    <g transform="matrix(1,0,0,1,4.471,0.64)">
        <text transform="matrix(1,0,0,1,0,33.398)" :fill="fontColor || '#5b5b5b'" style="font-family:&quot;Roboto&quot;;font-weight:400;font-size:36px;font-style:normal;stroke:none;">
        malcod
        </text>
    </g>
    <g transform="matrix(1,0,0,1,4.471,36.14)">
    <text transform="matrix(1,0,0,1,2.261,10.205)" :fill="accentColor || '#c40030'" style="font-family:&quot;Roboto&quot;;font-weight:400;font-size:11px;font-style:normal;stroke:none;">
    Learn to build web applications
    </text>
    </g>
    <g transform="matrix(1,0,0,1,145.127,0.64)">
    <text transform="matrix(1,0,0,1,0,33.398)" :fill="fontColor || '#5b5b5b'" style="font-family:&quot;Roboto&quot;;font-weight:400;font-size:36px;font-style:normal;stroke:none;">
        d
    </text>
    </g>
    <path :fill="accentColor ||'#C40030'" d="M 129.503 8.543 L 140.638 8.543 C 141.718 8.543 142.596 9.42 142.596 10.501 L 142.596 10.501 C 142.596 11.581 141.718 12.458 140.638 12.458 L 129.503 12.458 C 128.422 12.458 127.545 11.581 127.545 10.501 L 127.545 10.501 C 127.545 9.42 128.422 8.543 129.503 8.543 Z" style="stroke:none;stroke-miterlimit:10;"/>
    <path :fill="accentColor ||'#C40030'" d="M 129.503 30.355 L 140.638 30.355 C 141.718 30.355 142.596 31.232 142.596 32.312 L 142.596 32.312 C 142.596 33.393 141.718 34.27 140.638 34.27 L 129.503 34.27 C 128.422 34.27 127.545 33.393 127.545 32.312 L 127.545 32.312 C 127.545 31.232 128.422 30.355 129.503 30.355 Z" style="stroke:none;stroke-miterlimit:10;"/>
    <path :fill="accentColor ||'#C40030'" d="M 129.503 19.355 L 140.638 19.355 C 141.718 19.355 142.596 20.232 142.596 21.313 L 142.596 21.313 C 142.596 22.393 141.718 23.271 140.638 23.271 L 129.503 23.271 C 128.422 23.271 127.545 22.393 127.545 21.313 L 127.545 21.313 C 127.545 20.232 128.422 19.355 129.503 19.355 Z" style="stroke:none;stroke-miterlimit:10;"/>
    <path :fill="accentColor ||'#C40030'" d="M 129.057 24.949 L 135.01 24.949 C 135.844 24.949 136.522 25.626 136.522 26.461 L 136.522 27.352 C 136.522 28.187 135.844 28.864 135.01 28.864 L 129.057 28.864 C 128.223 28.864 127.545 28.187 127.545 27.352 L 127.545 26.461 C 127.545 25.626 128.223 24.949 129.057 24.949 Z" style="stroke:none;stroke-miterlimit:10;"/>
    <path :fill="accentColor ||'#C40030'" d="M 129.057 13.949 L 135.01 13.949 C 135.844 13.949 136.522 14.626 136.522 15.461 L 136.522 16.353 C 136.522 17.187 135.844 17.864 135.01 17.864 L 129.057 17.864 C 128.223 17.864 127.545 17.187 127.545 16.353 L 127.545 15.461 C 127.545 14.626 128.223 13.949 129.057 13.949 Z" style="stroke:none;stroke-miterlimit:10;"/>
</svg>
</nuxt-link>
</template>

<script>
export default {
  props: ['accentColor', 'fontColor']
};
</script>

<style>
</style>
