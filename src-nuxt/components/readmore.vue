<template>
<div>
    <v-layout style="overflow: auto">
        <v-flex xs12 style="margin-bottom: 16px">
            <span class="rm-title">Read More!</span>
        </v-flex>
    </v-layout>
    <v-layout wrap>
        <v-flex xs12 md4
            v-for="post in BlogPosts ? BlogPosts.nodes: []"
            :key="post.title"
            style="padding: 4px;"
        >
            <nuxt-link :to="{ path: '/posts/'+post.url}">
                <postcard :hideSocial="true" :post="post" :hideDesc="false"></postcard>
            </nuxt-link>
        </v-flex>
    </v-layout>

</div>
</template>

<script>
import posts3 from '~/apollo/queries/posts3';
import postcard from '~/components/postcard/postcard.vue';

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
    margin-bottom: 40px;
    font-size: 2em;
    font-weight: 600;
}
</style>
