<template>
  <v-card height="100%" style="display: flex; flex-flow: column; padding: 4px">

    <nuxt-link :to="{ path: '/posts/'+post.url}" style="flex:1; flex-flow: column">
        <div class="card-thumbnail-wrapper">
            <progressiveimage class="card-thumbnail" :alt="post.title" :src="'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/'+post.thumbnail" />
        </div>
        <v-card-title primary-title>
        <h2 class="headline mb-0">{{post.title}}</h2>
        </v-card-title>

        <v-flex>
        <span align-center v-if="!hideDesc" class="grey--text">{{post.description}}</span>
        </v-flex>

    </nuxt-link>

    <v-card-actions>
        <postcardIcons v-if="!hideSocial" :post="post"></postcardIcons>
        <v-spacer></v-spacer>
        <nuxt-link style="float:right" :to="{ path: '/posts/'+post.url}">
            <v-btn aria-label="Read More" flat>
            READ MORE
            </v-btn>
        </nuxt-link>
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
    }
};
</script>

<style>
.card-actions {
    background-color: white;
    padding-left: 16px;
    padding-right: 16px;
    height: 60px;
}

.headline {
    font-weight: 800;
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
    background-color: white;
    position: relative;
}

.title-box {
    background-color: white;
    padding-left: 16px;
    padding-right: 16px;
    height: 210px;
    margin-bottom: 8px;
    overflow-y: hidden;
}

.title-box > h1 {
    line-height: 32px;
}

.description {
    min-height: 100px;
}

.postcard-icon:hover * {
    fill: #c40030;
}
.card {
    background-color: white;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: center;
    margin-bottom: 8px;
}
.card-thumbnail {
    width: 100%;
    margin-bottom: -5px;
    top: 0;
    left: 0;
    position: absolute;
}
</style>
