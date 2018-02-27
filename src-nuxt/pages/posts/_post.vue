<template>
  <div style="width: 100%">
    <div class="post-content-container">
      <div class="post-thumbnail-wrapper">
        <progressiveimage :alt="BlogPost.title" class="post-thumbnail" v-if="BlogPost" :src="'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/'+ BlogPost.thumbnail"/>
      </div>
      <h1 class="post-title" v-if="BlogPost">{{BlogPost.title}}</h1>
      <div class="post-meta" v-if="BlogPost">
        <img alt="Lukas Marx" class="post-author-thumbnail" src="/lukas-marx.jpg">
        <span style="margin-left: 8px">Lukas Marx</span>
        <svg style="margin-left: 16px" width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" fill="#333"/></svg>
        <span style="margin-left: 8px">{{getPostDate(BlogPost)}}</span>
      </div>
      <renderer :input="BlogPost"></renderer>
      <sidesocial :post="BlogPost"></sidesocial>
      <horizontalsocial :post="BlogPost"></horizontalsocial>
    </div>
  <readmore></readmore>
</div>
</template>

<script>
import post from '~/apollo/queries/post';
import renderer from '~/components/renderer/renderer.vue';
import sidesocial from '~/components/sidesocial.vue';
import horizontalsocial from '~/components/horizontalsocial.vue';
import readmore from '~/components/readmore.vue';
import progressiveimage from '~/components/progressiveimage.vue';

export default {
    components: {
        renderer,
        sidesocial,
        horizontalsocial,
        readmore,
        progressiveimage
    },
    data() {
        return {
            BlogPost: null
        };
    },
    head() {
        const post = this.BlogPost || { title: 'loading...' };
        return {
            title: post.title + '| malcoded',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: post.description
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: post.description
                },
                { hid: 'og:type', name: 'og:type', content: 'article' },
                {
                    hid: 'og:sitename',
                    name: 'og:sitename',
                    content: 'malcoded.com'
                },
                { hid: 'og:title', name: 'og:title', content: post.title },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/' + post.thumbnail
                },
                {
                    hid: 'apple-mobile-web-app-title',
                    name: 'apple-mobile-web-app-title',
                    content: post.title + '| malcoded'
                },
                { property: 'og:locale', content: 'en_US' },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image'
                },
                { name: 'twitter:site', content: '@malcoded' }
            ]
        };
    },
    apollo: {
        BlogPost: {
            query: post,
            variables() {
                return {
                    filter: { field: 'url', value: this.$route.params.post }
                };
            },
            prefetch: ({ route }) => {
                return { filter: { field: 'url', value: route.params.post } };
            }
        }
    },
    methods: {
        getPostDate(post) {
            if (post) {
                const date = new Date(post.releaseDate);
                let options = {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                };
                return date.toLocaleString('en-us', options);
            }
        }
    }
};
</script>

<style>
.link {
    font-size: 23px;
    color: #c3002f;
    text-decoration: none;
    font-weight: bold;
    white-space: normal;
    word-wrap: break-word;
}
.link:hover {
    color: #c3002f;
}

.post-meta {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.post-thumbnail-wrapper {
    padding-top: 56.25%;
    width: 100%;
    position: relative;
}

.post-author-thumbnail {
    height: 48px;
}

.text {
    white-space: normal;
    word-wrap: break-word;
    font-size: 23px;
    line-height: 1.58;
    letter-spacing: -0.003em;
    font-weight: 200;
}

.inline-image {
    width: 100%;
}

.post-title {
    margin-top: 8px;
    margin-bottom: 20px;
    font-size: 40px;
}

.post-thumbnail {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.post-content-container {
    width: 100%;
    padding: 32px;
    padding-top: 8px;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin-top: 32px;
    margin-bottom: 32px;
    padding-bottom: 32px;
    min-height: 100vh;
}

h2 {
    font-size: 36px;
    font-weight: 700;
    margin-top: 16px;
}

h3 {
    font-size: 26px;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 0;
}
h4 {
    font-size: 20px;
    margin-bottom: 0;
}
</style>
