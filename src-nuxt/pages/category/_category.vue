<template>
  <div style="margin-top: 32px">
      <v-container fluid grid-list-md text-xs-center>
          <v-flex lg8 offset-lg2 md10 offset-md1 sm12>
        <v-layout row wrap>
            <v-flex md4 sm6 xs12
                    v-for="post in all(posts)"
                    :key="post.title +'a'"
                >
                <postcard :post="post"></postcard>
            </v-flex>
        </v-layout>
          </v-flex>
      </v-container>
  </div>
</template>

<script>
import postcard from '~/components/postcard/postcard.vue';
import category from '~/apollo/queries/category';
export default {
    components: { postcard },
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
                        filter: {
                            field: 'category1',
                            value: this.$route.params.category
                        }
                    };
            },
            prefetch: ({ route }) => {
                if (route.params.category === 'all') return {};
                else
                    return {
                        filter: {
                            field: 'category1',
                            value: route.params.category
                        }
                    };
            },
            update: ({ BlogPosts }) => {
                return BlogPosts.nodes;
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
/* .page-enter {
    transform: translateX(100%);
    opacity: 1;
}

.page-enter-active {
    transition: all 0.4s;
}

.page-enter-to {
    opacity: 1;
}

.page-leave-active {
    transition: all 0.2s;
    opacity: 0;
    transform: translateX(100%);
} */
</style>
