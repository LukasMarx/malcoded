<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-flex lg8 offset-lg2 md10 offset-md1 sm12>
        <v-layout row wrap>
            <v-flex xs12 md6
            v-for="post in first2(posts)"
            :key="post.title +'a'"
            >
            <postcard :post="post"></postcard>
            </v-flex>

            <v-flex xs12 md4
            v-for="post in second3(posts)"
            :key="post.title +'b'"
            >
            <postcard :post="post"></postcard>
            </v-flex>
            

            <v-flex xs12>
                <nuxt-link :to="{ path: 'category/all'}" title="All Posts">
                    <button aria-label="All Posts" flat large>
                    ALL POSTS
                    </button>
                </nuxt-link>
            </v-flex>



            <v-flex xs12>
                <h1 class="section-title">Angular Beginner</h1>
            </v-flex>
            
            <v-flex xs12 md4
                v-for="post in all(beginner)"
                :key="post.title + 'c'"
            >
                <postcard :post="post"></postcard>
            </v-flex>

            <v-flex xs12>
                <nuxt-link :to="{ path: '/category/angular-beginner'}" title="Beginner Posts">
                <button aria-label="Beginner Posts" flat large>
                    ALL BEGINNER POSTS
                </button>
                </nuxt-link>
            </v-flex>

            <v-flex xs12>
                <h1 class="section-title">Angular Intermediate</h1>
            </v-flex>
            <v-flex xs12 md4
                v-for="post in all(intermediate)"
                :key="post.title + 'c'"
                >
                <postcard :post="post"></postcard>
            </v-flex>
            <v-flex xs12>
                <nuxt-link :to="{ path: 'category/angular-intermediate'}" title="Intermediate Posts">
                    <button aria-label="Intermediate Posts" flat large>
                    ALL INTERMEDIATE POSTS
                    </button>
                </nuxt-link>
            </v-flex>
        </v-layout>
      </v-flex>
    </v-container>


</template>

<script>
import posts from '~/apollo/queries/posts';
import angularBeginner from '~/apollo/queries/angularBeginner';
import angularIntermediate from '~/apollo/queries/angularIntermediate';
import postcard from '~/components/postcard/postcard.vue';

export default {
    data() {
        return { posts: null, beginner: null, intermediate: null };
    },
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
.index-container {
    margin-top: 32px;
}
.container {
    min-height: 100vh;
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
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
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
a {
    color: inherit;
}

a:hover {
    color: inherit;
}
</style>
