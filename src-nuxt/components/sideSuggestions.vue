<template>
<div>
    <span class="title">You might also like:</span>
    <div style="margin-top: 16px">
        <nuxt-link v-for="post in post ? post.recommendations.nodes: []" 
            :key="post.url" 
            :to="{ path: '/posts/'+post.url}" 
            style="flex:1 1 auto !important; flex-flow: column">
            <v-card   class="card">
                <progressiveimage class="thumbnail" :src="'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/'+post.thumbnail"></progressiveimage>
                <span class="ttl">{{post.title}}</span>
            </v-card>
        </nuxt-link>
    </div>
</div>
  
</template>

<script>
import progressiveimage from '~/components/progressiveimage.vue';
import posts3 from '~/apollo/queries/posts3';
export default {
    props: ['post'],
    data() {
        return {
            BlogPosts: null
        };
    },
    components: { progressiveimage },
    apollo: {
        BlogPosts: {
            query: posts3,
            prefetch: true
        }
    }
};
</script>

<style scoped>
.card {
    display: flex;
    flex-flow: row;
    padding: 4px;
    margin-bottom: 16px;
    float: left;
    justify-content: space-around;
}

.thumbnail {
    width: 100px;
    align-items: center;
}

.ttl {
    font-weight: 600;
    padding: 8px;
}

.card * {
    display: flex;
}
</style>
