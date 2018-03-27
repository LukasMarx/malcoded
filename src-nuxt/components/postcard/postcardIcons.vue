<template>
    <div>
        <a icon target="_blank" rel="noopener" class="share-link" v-on:click="socialClick('twitter')" :href="'http://twitter.com/share?url=https://malcoded.com/posts/'+post.url+'&text='+post.title+'&via=malcoded&hashtags=angular,javascript'">
          <button aria-label="share twitter" icon class="postcard-icon">
          <svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path class="icon-path" d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#333"/></svg>
          </button>
      </a>
      <a target="_blank"  rel="noopener" class="share-link" v-on:click="socialClick('facebook')" :href="'http://www.facebook.com/sharer/sharer.php?u=https://malcoded.com/posts/'+post.url">
          <button aria-label="share facebook" icon class="postcard-icon">
            <svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path class="icon-path" d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z" fill="#333"/></svg>
          </button>
      </a>
      <a target="_blank" rel="noopener" class="share-link" v-on:click="socialClick('reddit')" :href="'http://reddit.com/submit?url=https://malcoded.com/posts/'+post.url+'&title='+post.title">
          <button aria-label="share reddit" icon class="postcard-icon">
          <svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path class="icon-path" d="M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zm-307-181q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zm395 0q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zm251-120q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zm358 30q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" fill="#333"/></svg>
          </button>
      </a>
    </div>
</template>

<script>
export default {
    props: ['post'],
    methods: {
        socialClick(network) {
            this.$ga.event({
                eventCategory: 'social',
                eventAction: 'share',
                eventLabel: network
            });
        }
    }
};
</script>

<style>
.share-link :hover > * {
    -moz-animation: bounce 1s;
    -webkit-animation: bounce 1s;
    animation: bounce 1s;
}
@-moz-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        -moz-transform: translateY(0);
        transform: translateY(0);
    }
    20% {
        -moz-transform: translateY(-30px);
        transform: translateY(-30px);
    }
    80% {
        -moz-transform: translateY(-15px);
        transform: translateY(-15px);
    }
}
@-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    20% {
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
    }
}
@keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
    20% {
        -moz-transform: translateY(-30px);
        -ms-transform: translateY(-30px);
        -webkit-transform: translateY(-30px);
        transform: translateY(-30px);
    }
}
</style>
