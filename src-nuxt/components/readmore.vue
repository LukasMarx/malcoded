<template>
  <div class="rm-container">
      <h1 class="rm-title">Read More!</h1>
        <div
            v-for="post in BlogPosts ? BlogPosts.nodes: []"
            :key="post.title"
            class="rm-layout col-md-4 col"
        >
            <nuxt-link :to="{ path: '/posts/'+post.url}">
                <postcard :hideSocial="true" :post="post" :hideDesc="false"></postcard>
            </nuxt-link>
        </div>
  </div>
</template>

<script>
import posts3 from '~/apollo/queries/posts3';
import postcard from '~/components/postcard.vue';

export default {
    components: {
        postcard
    },
    data() {
        return {
            BlogPosts: null
        };
    },
    apollo: {
        BlogPosts: {
            query: posts3,
            prefetch: true
        }
    }
};
</script>

<style>
.rm-thumbnail {
    width: 100%;
    margin-bottom: -5px;
}

.rm-title {
    margin-bottom: 32px;
}

/* .rm-layout {
} */

.rm-container {
    overflow-x: auto;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
}
</style>
