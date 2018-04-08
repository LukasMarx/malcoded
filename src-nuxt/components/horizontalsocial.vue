<template>
    <v-layout row wrap>
        <v-flex xs12>
            <!-- <span class="sh-title">Share!</span> -->
            <v-card class="rec-card" v-if="post">
                
                <a icon target="_blank" rel="noopener" class="h-share-link icon-highlight" v-on:click="socialClick('twitter')" :href="'http://twitter.com/share?url=https://malcoded.com/posts/'+post.url+'&text='+post.title+'&via=malcoded&hashtags=angular,javascript'">
                    <button aria-label="share on twitter" large icon class="icon-color icon-path">
                    <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"/></svg>
                    </button>
                </a>
                <a target="_blank" rel="noopener" class="h-share-link icon-highlight" v-on:click="socialClick('facebook')" :href="'http://www.facebook.com/sharer/sharer.php?u=https://malcoded.com/posts/'+post.url">
                    <button aria-label="share on facebook" large icon class="icon-color icon-path">
                    <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"/></svg>
                    </button>
                </a>
                <a target="_blank" rel="noopener" class="h-share-link icon-highlight" v-on:click="socialClick('reddit')" :href="'http://reddit.com/submit?url=https://malcoded.com/posts/'+post.url+'&title='+post.title">
                    <button aria-label="share on reddit" large icon class="icon-color icon-path">
                    <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1095 1167q16 16 0 31-62 62-199 62t-199-62q-16-15 0-31 6-6 15-6t15 6q48 49 169 49 120 0 169-49 6-6 15-6t15 6zm-307-181q0 37-26 63t-63 26-63.5-26-26.5-63q0-38 26.5-64t63.5-26 63 26.5 26 63.5zm395 0q0 37-26.5 63t-63.5 26-63-26-26-63 26-63.5 63-26.5 63.5 26 26.5 64zm251-120q0-49-35-84t-85-35-86 36q-130-90-311-96l63-283 200 45q0 37 26 63t63 26 63.5-26.5 26.5-63.5-26.5-63.5-63.5-26.5q-54 0-80 50l-221-49q-19-5-25 16l-69 312q-180 7-309 97-35-37-87-37-50 0-85 35t-35 84q0 35 18.5 64t49.5 44q-6 27-6 56 0 142 140 243t337 101q198 0 338-101t140-243q0-32-7-57 30-15 48-43.5t18-63.5zm358 30q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"/></svg>
                    </button>
                </a>      
                <a target="_blank" rel="noopener" class="h-share-link icon-highlight" v-on:click="socialClick('linkedin')" :href="'http://www.linkedin.com/shareArticle?url=https://malcoded.com/posts/'+post.url+'&title='+post.title+'&summary='+post.description+'&source=https://malcoded.com'">
                    <button aria-label="share on linkedin" large icon class="icon-color icon-path">
                    <svg width="64" height="64" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path  d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"/></svg>
                    </button>
                </a>
                <a target="_blank" rel="noopener" class="h-share-link icon-highlight" v-on:click="socialClick('googleplus')" :href="'https://plus.google.com/share?url=https://malcoded.com/posts/'+post.url">
                    <button aria-label="share on google-plus" large icon class="icon-color icon-path">
                    <svg width="64" height="64" viewBox="0 0 2304 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1437 913q0 208-87 370.5t-248 254-369 91.5q-149 0-285-58t-234-156-156-234-58-285 58-285 156-234 234-156 285-58q286 0 491 192l-199 191q-117-113-292-113-123 0-227.5 62t-165.5 168.5-61 232.5 61 232.5 165.5 168.5 227.5 62q83 0 152.5-23t114.5-57.5 78.5-78.5 49-83 21.5-74h-416v-252h692q12 63 12 122zm867-122v210h-209v209h-210v-209h-209v-210h209v-209h210v209h209z"/></svg>
                    </button>
                </a>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    props: ['post', 'hoverColor'],
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
.rec-card {
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 32px;
    padding: 16px;
    justify-content: space-around;
    flex-wrap: wrap;
}

.h-share-link {
    float: left;
    margin-right: 16px;
}

/* .icon-path {
    fill: #333;
} */

.sh-title {
    margin-top: 32px;
    font-size: 2em;
    font-weight: 600;
}

.icon-path:hover {
    fill: #c40030;
    background-color: transparent !important;
}
</style>
