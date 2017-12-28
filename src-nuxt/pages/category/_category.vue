<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>

      <v-flex xs12 md6 lg6
        v-for="post in all(posts)"
        :key="post.title +'a'"
      >
        <postcard :post="post"></postcard>
      </v-flex>
    </v-layout>
</v-container>
  
</template>

<script>
import postcard from '~/components/postcard.vue';
import { category } from '~/apollo/queries/posts';
export default {
  components: { postcard },
  apollo: {
    posts: {
      query: category,
      variables() {
        if (this.$route.params.category === 'all') return {};
        else return { filter: { field: 'category1', value: this.$route.params.category } };
      },
      prefetch: ({ route }) => {
        if (route.params.category === 'all') return {};
        else return { filter: { field: 'category1', value: route.params.category } };
      },
      update: ({ BlogPosts }) => {
        return BlogPosts;
      }
    }
  },
  methods: {
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

</style>
