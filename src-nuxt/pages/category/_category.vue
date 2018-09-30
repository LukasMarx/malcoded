<template>
      <v-container fluid grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex lg8 offset-lg2 md10 offset-md1 sm12>
                <v-layout row wrap>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>
                    <v-flex v-if="!posts" md4 sm6 xs12>
                        <postcardPlaceholder></postcardPlaceholder>
                    </v-flex>

                    <v-flex md4 sm6 xs12
                            v-for="post in all(posts)"
                            :key="post.title +'a'"
                        >
                        <postcard :post="post"></postcard>
                    </v-flex>
                </v-layout>
            </v-flex>
          </v-layout>
      </v-container>
</template>

<script>
import postcard from '~/components/postcard/postcard.vue';
import category from '~/apollo/queries/category';
import postcardPlaceholder from '~/components/postcard/postcardPlaceholder.vue';
export default {
  components: { postcard, postcardPlaceholder },
  data() {
    return { posts: null };
  },
  apollo: {
    posts: {
      query: category,
      variables() {
        if (this.$route.params.category === 'all') return {};
        else
          return {
            category: this.$route.params.category
          };
      },
      prefetch: ({ route }) => {
        if (route.params.category === 'all') return {};
        else
          return {
            category: this.$route.params.category
          };
      },
      update: ({ getPublicPosts }) => {
        return getPublicPosts.edges.map(edge => edge.node);
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
