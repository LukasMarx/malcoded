<template>
  <v-container style="margin-top:32px;" fluid grid-list-md>
    <v-layout row wrap>

      <v-flex xs12 md6 lg6
        v-for="post in first2(posts)"
        :key="post.title +'a'"
      >
        <postcard :post="post"></postcard>
      </v-flex>

      <v-flex xs12 md6 lg4
        v-for="post in second3(posts)"
        :key="post.title +'b'"
      >
        <postcard :post="post"></postcard>
      </v-flex>
      <v-flex xs12>
        <nuxt-link :to="{ path: 'category/all'}">
          <v-btn flat large>
            All Posts
          </v-btn>
        </nuxt-link>
      </v-flex>


      <v-flex xs12>
      <h1 class="section-title">Angular Beginner</h1>
      </v-flex>
      <v-flex xs12 md6 lg4
        v-for="post in all(beginner)"
        :key="post.title + 'c'"
      >
        <postcard :post="post"></postcard>
      </v-flex>
      <v-flex xs12>
        <nuxt-link :to="{ path: '/category/angular-beginner'}">
          <v-btn flat large>
            All "Beginner" Posts
          </v-btn>
        </nuxt-link>
      </v-flex>



      <v-flex xs12>
      <h1 class="section-title">Angular Intermediate</h1>
      </v-flex>
      <v-flex xs12 md6 lg4
        v-for="post in all(intermediate)"
        :key="post.title + 'c'"
      >
        <postcard :post="post"></postcard>
      </v-flex>
      <v-flex xs12>
        <nuxt-link :to="{ path: 'category/angular-intermediate'}">
          <v-btn flat large>
            All "Intermediate" Posts
          </v-btn>
        </nuxt-link>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import { posts, angularBeginner, angularIntermediate } from '~/apollo/queries/posts';
import postcard from '~/components/postcard.vue';

export default {
  layout: 'default',
  components: { postcard },
  apollo: {
    posts: {
      query: posts,
      prefetch: true,
      update: ({ BlogPosts }) => {
        return BlogPosts;
      }
    },
    beginner: {
      query: angularBeginner,
      prefetch: true,
      update: ({ BlogPosts }) => {
        return BlogPosts;
      }
    },
    intermediate: {
      query: angularIntermediate,
      prefetch: true,
      update: ({ BlogPosts }) => {
        return BlogPosts;
      }
    }
  },
  methods: {
    first2: posts => {
      if (!posts) return null;
      return posts.slice(0, 2).map((value, index) => {
        const clone = JSON.parse(JSON.stringify(value));

        const description = clone.description.substring(0, 197);
        if (clone.description.length > 200) {
          clone.description = description + '...';
        } else {
          clone.description = description;
        }

        return clone;
      });
    },
    second3: posts => {
      if (!posts) return null;
      return posts.slice(2, posts.length).map((value, index) => {
        const clone = JSON.parse(JSON.stringify(value));
        const description = clone.description.substring(0, 197);
        if (clone.description.length > 200) {
          clone.description = description + '...';
        } else {
          clone.description = description;
        }
        return clone;
      });
    },
    all: posts => {
      if (!posts) return null;
      return posts.map((value, index) => {
        const clone = JSON.parse(JSON.stringify(value));
        const description = clone.description.substring(0, 197);
        if (clone.description.length > 200) {
          clone.description = description + '...';
        } else {
          clone.description = description;
        }
        return clone;
      });
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.section-title {
  margin-top: 64px;
  margin-bottom: 16px;
  float: left;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
