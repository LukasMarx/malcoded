<template>
  <div class="rm-container">
      <h1 class="rm-title">Read More!</h1>
      <v-layout row>
        <v-flex xs12 lg4
            v-for="post in BlogPosts"
            :key="post.title"
            class="rm-layout"
        >
            <nuxt-link :to="{ path: '/posts/'+post.url}">
                <postcard :post="post" :hideDesc="true"></postcard>
            </nuxt-link>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
import { posts3 } from '~/apollo/queries/posts';
import postcard from '~/components/postcard.vue';

export default {
  components: {
    postcard
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

.rm-layout {
  margin: 8px;
}

.rm-title {
  margin-bottom: 32px;
}

.rm-container {
  overflow-x: auto;
  width: 100%;
  padding: 32px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-top: 32px;
  margin-bottom: 32px;
  padding-bottom: 32px;
}
</style>
