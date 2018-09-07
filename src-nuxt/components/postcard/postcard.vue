<template>
  <v-card height="100%" style="display: flex; flex-flow: column; padding: 4px">

    <nuxt-link :to="{ path: '/posts/'+post.url}" style="flex:1 1 auto !important; flex-flow: column">
        <div class="card-thumbnail-wrapper">
            <progressiveimage class="card-thumbnail" :alt="post.title" :src="'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/'+post.thumbnail" />
        </div>
        <div class="text-box">
            <h2 class="headline">{{post.title}}</h2>
            <div>
                <v-icon small>access_time</v-icon>
                <span style="font-size: 14px; margin-left: 8px; font-style: italic">{{getPostDate(post)}}</span>
            </div>
            <v-flex>
                <span align-center v-if="!hideDesc" class="grey--text">{{post.description}}</span>
            </v-flex>
        </div>
    </nuxt-link>

    <nuxt-link class="floating" :to="{ path: '/posts/'+post.url}">
        <v-btn aria-label="Read More" fab>
            <v-icon style="display: flex;" color="primary">arrow_forward</v-icon>
        </v-btn>
    </nuxt-link>

    <v-card-actions>
        <!-- <postcardIcons v-if="!hideSocial" :post="post"></postcardIcons> -->
        <v-spacer></v-spacer>
        
    </v-card-actions>

  </v-card>
</template>

<script>
import progressiveimage from '~/components/progressiveimage.vue';
import postcardIcons from './postcardIcons.vue';
export default {
  props: ['post', 'hideDesc', 'hideSocial'],
  components: {
    progressiveimage,
    postcardIcons
  },
  methods: {
    getPostDate(post) {
      if (post) {
        const date = new Date(post.releaseDate);
        let options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        return date.toLocaleString('en-us', options);
      }
    }
  }
};
</script>

<style>
.floating {
  position: absolute;
  margin-top: calc(56.25% - 32px);
  right: 0;
}
.text-box {
  padding-left: 32px;
  padding-right: 64px;
  text-align: left;
}

.headline {
  font-weight: 800;
  margin-left: 0;
  margin-bottom: 0;
}

.postcard-icon {
  float: left;
  padding: 8px !important;
}

.postcard-icon:hover {
  background-color: transparent !important;
}
.card-thumbnail-wrapper {
  padding-top: 56.25%;
  position: relative;
}

.card-thumbnail {
  width: 100%;
  margin-bottom: -5px;
  top: 0;
  left: 0;
  position: absolute;
}
</style>
