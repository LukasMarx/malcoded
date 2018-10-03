<template>
<div>
    <span class="title">You might also like:</span>
    <div style="margin-top: 16px">
        <nuxt-link v-for="post in post ? post.recommendedPosts.edges: []" 
            :key="post.node.url" 
            :to="{ path: '/posts/'+post.node.url}" 
            style="flex:1 1 auto !important; flex-flow: column">
            <v-card   class="card">
                <progressiveimage class="thumbnail" :src="'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/'+post.node.thumbnail"></progressiveimage>
                <div class="text-wrapper">
                  <span class="ttl">{{post.node.title}}</span>
                </div>
            </v-card>
        </nuxt-link>
    </div>
</div>
  
</template>

<script>
import progressiveimage from '~/components/progressiveimage.vue';
export default {
  props: ['post'],
  components: { progressiveimage }
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
  min-height: 80px;
}

.text-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
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
