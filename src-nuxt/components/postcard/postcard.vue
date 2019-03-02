<template>
  <v-card height="100%" style="display: flex; flex-flow: column; padding: 4px">
    <nuxt-link
      :to="{ path: '/posts/'+post.url}"
      style="flex:1 1 auto !important; flex-flow: column"
    >
      <div class="card-thumbnail-wrapper">
        <progressiveimage class="card-thumbnail" :alt="post.title" :src="assetUrl+post.thumbnail"/>
      </div>

      <div class="header">
        <h2 class="headline">{{post.title}}</h2>
        <v-spacer></v-spacer>
        <v-btn aria-label="Read More" fab class="read-more">
          <v-icon style="display: flex;" color="primary">arrow_forward</v-icon>
        </v-btn>
      </div>
      <div class="text-box">
        <div class="date-box">
          <v-icon small class="grey--text">access_time</v-icon>
          <span
            style="font-size: 14px; margin-left: 8px; font-style: italic"
            class="grey--text"
          >{{getPostDate(post)}}</span>
        </div>
        <span align-center v-if="!hideDesc" class="grey--text">{{post.description}}</span>
      </div>
    </nuxt-link>

    <v-card-actions>
      <!-- <postcardIcons v-if="!hideSocial" :post="post"></postcardIcons> -->
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import progressiveimage from "~/components/progressiveimage.vue";
import postcardIcons from "./postcardIcons.vue";
export default {
  props: ["post", "hideDesc", "hideSocial"],
  components: {
    progressiveimage,
    postcardIcons
  },
  computed: {
    assetUrl() {
      return this.$env.ASSET_URL || "http://localhost:3000/v1/api/asset/";
    }
  },
  methods: {
    getPostDate(post) {
      if (post) {
        const date = new Date(post.releaseDate);
        let options = {
          year: "numeric",
          month: "long",
          day: "numeric"
        };
        return date.toLocaleString("en-us", options);
      }
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  padding-left: 32px;
  padding-right: 16px;
  text-align: left;
  margin-top: 8px;
}
.floating {
  right: 0;
}
.text-box {
  padding-left: 32px;
  padding-right: 32px;
  text-align: left;
}

.headline {
  font-weight: 600;
  margin: 0;
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

.date-box {
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  align-items: center;
}

.theme--dark.read-more {
  background-color: #1f2e41 !important;
}
</style>
