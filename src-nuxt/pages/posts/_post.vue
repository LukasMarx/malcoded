<template>
  <!-- <v-layout style="margin-top: 16px" row wrap> -->
  <v-container
    fluid
    grid-list
    style="padding:0; padding-top: 16px; flex: 1 1 auto !important; margin-top:72px"
  >
    <v-layout row wrap>
      <v-flex lg5 offset-lg2 md8 offset-md2 sm10 offset-sm1 xs12>
        <div class="base-padding align-left ms-flex" style="padding-top: 8px">
          <transition name="fade" mode="out-in">
            <div key="1" v-if="!BlogPost" class="post-placeholder ms-flex">
              <div
                class="placeholder-element animated-background"
                style="padding-top: 45%; width: 75%; margin-left: 12.5%;"
              ></div>
              <div class="placeholder-element animated-background" style="width:80%"></div>
              <div class="placeholder-element animated-background"></div>
              <div class="placeholder-element animated-background" style="width: 60%"></div>
              <div class="post-meta">
                <div
                  class="animated-background"
                  style="width:48px; height: 48px; border-radius:50% "
                ></div>
                <div class="animated-background" style="width:25%; height: 23px; margin-left: 8px"></div>
                <div
                  class="animated-background"
                  style="width:48px; height: 48px;  margin-left: 16px"
                ></div>
                <div class="animated-background" style="width:25%; height: 23px; margin-left: 8px"></div>
              </div>
              <div
                class="placeholder-element animated-background"
                style="width: 100%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 90%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 60%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 90%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 80%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 50%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 60%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 90%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 80%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 90%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 50%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 70%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 60%; margin-left:0"
              ></div>
              <div
                class="placeholder-element animated-background"
                style="width: 30%; margin-left:0"
              ></div>
            </div>
            <div key="2" v-if="BlogPost" class="ms-flex">
              <div class="post-thumbnail-wrapper">
                <progressiveimage
                  :alt="BlogPost.title"
                  class="post-thumbnail"
                  v-if="BlogPost"
                  :src="assetUrl+ BlogPost.thumbnail"
                />
              </div>
              <v-flex class="post-additional-padding">
                <h1 class="post-title" v-if="BlogPost">{{BlogPost.title}}</h1>
                <div class="post-meta" v-if="BlogPost">
                  <img alt="Lukas Marx" class="post-author-thumbnail" src="/lukas-marx.jpg">
                  <span style="margin-left: 8px">Lukas Marx</span>
                  
                  <svg
                    fill="#a2a2a2"
                    style="margin-left: 16px"
                    width="32"
                    height="32"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      class="icon-path"
                      d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
                    ></path>
                  </svg>
                  
                  <span style="margin-left: 8px">{{getPostDate(BlogPost)}}</span>
                </div>
                <renderer
                  style="word-break: break-word;"
                  :input="BlogPost"
                  v-on:headlines="headlines = $event"
                ></renderer>
              </v-flex>&nbsp;
            </div>
          </transition>
        </div>
        <!-- <horizontalsocial class="horizontal-social" :post="BlogPost"></horizontalsocial> -->
        <comments :post="BlogPost" class="comments"></comments>
      </v-flex>
      <sidebar>
        <headlines
          :headlines="headlines"
          v-on:headline-click="navigateToHeadline($event)"
          :color="BlogPost ? BlogPost.primaryColor : null"
        ></headlines>
        <v-btn
          @click.native="dialog = true"
          v-if="BlogPost"
          class="email-button"
          outline
          large
          v-bind:style="{ 'color': (BlogPost.primaryColor || '#c3002f' ) + '!important'}"
        >
          <v-icon class="email-icon" dark>email</v-icon>Join the Newsletter
        </v-btn>
        <sideSuggestions :post="BlogPost"></sideSuggestions>
      </sidebar>
    </v-layout>
    <emailPopUp v-bind:show="dialog" v-on:close="dialog = false"></emailPopUp>
    <shareFab class="fab" :post="BlogPost"></shareFab>
  </v-container>
  <!-- </v-layout> -->
</template>

<script>
import post from "~/apollo/queries/post";
import renderer from "~/components/renderer/renderer.vue";
import horizontalsocial from "~/components/horizontalsocial.vue";
import progressiveimage from "~/components/progressiveimage.vue";
import headlines from "~/components/headlines.vue";
import sideSuggestions from "~/components/sideSuggestions.vue";
import sidebar from "~/components/sidebar.vue";
import emailPopUp from "~/components/emailPopUp.vue";
import shareFab from "~/components/share-fab.vue";
import comments from "~/components/comments/comments.vue";

export default {
  components: {
    renderer,
    horizontalsocial,
    progressiveimage,
    headlines,
    sideSuggestions,
    sidebar,
    emailPopUp,
    shareFab,
    comments
  },
  data() {
    return {
      BlogPost: null,
      headlines: null,
      dialog: false
    };
  },
  head() {
    const post = this.BlogPost || { title: "loading..." };
    return {
      title: post.title + " | malcoded",
      meta: [
        {
          hid: "description",
          name: "description",
          content: post.description
        },
        {
          hid: "og:description",
          property: "og:description",
          content: post.description
        },
        { hid: "og:type", name: "og:type", content: "article" },
        {
          hid: "og:sitename",
          name: "og:sitename",
          content: "malcoded.com"
        },
        { hid: "og:title", name: "og:title", content: post.title },
        {
          hid: "og:image",
          property: "og:image",
          content: this.assetUrl + post.thumbnail + ".jpg"
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: post.title + "| malcoded"
        },
        { property: "og:locale", content: "en_US" },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        { name: "twitter:site", content: "@malcoded" }
      ]
    };
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
    },
    navigateToHeadline(id) {
      document.getElementById(id).scrollIntoView();
    }
  },
  async asyncData({ error, app, params, redirect, store }) {
    const BlogPost = await app.apolloProvider.defaultClient
      .query({
        query: post,
        variables: { url: params.post }
      })
      .then(({ data }) => data && data.publicPost);
    if (!BlogPost) {
      return error({ statusCode: 404, message: "Not found" });
    }
    if (BlogPost.primaryColor) {
      store.commit("setThemeColor", BlogPost.primaryColor);
    }
    return { BlogPost };
  }
};
</script>

<style>
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ms-flex {
    display: flex;
  }
}

.email-button {
  width: 100%;
  margin: 0;
}

.email-icon {
  margin-right: 8px;
}

.placeholder-element {
  height: 25px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
}

.post-placeholder {
  width: 100%;
}

.link {
  font-size: 23px;
  color: #c3002f;
  text-decoration: none;
  font-weight: bold;
  white-space: normal;
  word-wrap: break-word;
}
.link:hover {
  color: #c3002f;
}

.post-meta {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.post-thumbnail-wrapper {
  padding-top: 45%;
  /* padding-top: 56.25%; */
  width: 100%;
  position: relative;
}

.post-author-thumbnail {
  height: 48px;
  border-radius: 50%;
}

.text {
  white-space: normal;
  word-wrap: break-word;
  font-size: 23px;
  line-height: 1.58;
  letter-spacing: -0.003em;
  font-weight: 200;
}

.inline-image {
  width: 100%;
}

.inline-iframe {
  width: 100%;
  height: 500px;
}

.post-title {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 40px;
}

@media screen and (max-width: 600px) {
  .post-title {
    font-size: 30px;
  }
  .post-additional-padding {
    padding: 16px;
  }
}

@media screen and (max-width: 600px) {
  .comments {
    padding: 32px;
  }
}
.post-thumbnail {
  width: 75%;
  margin-left: 12.5%;
  position: absolute;
  top: 0;
  left: 0;
}

.post-content-container {
  padding: 32px;
  padding-top: 8px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 32px;
  padding-bottom: 32px;
  min-height: 100vh;
  text-align: left;
}

.align-left {
  text-align: left !important;
}

h2 {
  font-size: 36px;
  font-weight: 700;
  margin-top: 16px;
}

@media screen and (max-width: 576px) {
  h2 {
    font-size: 26px;
  }
}

@media screen and (max-width: 1200px) {
  .horizontal-social {
    display: none;
  }
}

h3 {
  font-size: 26px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 0;
}

h4 {
  font-size: 20px;
  margin-bottom: 0;
}

.fab {
  position: fixed;
}
</style>
