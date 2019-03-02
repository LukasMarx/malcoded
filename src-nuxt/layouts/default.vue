<template>
  <v-app :dark="darkMode">
    <v-toolbar fixed scroll-off-screen style="padding:0">
      <v-layout row style="height:100%">
        <v-flex lg8 offset-lg2 md10 offset-md1 sm12 style="display:flex;">
          <logo :accentColor="themeColor" :fontColor="darkMode? '#fff' : null"></logo>
          <v-spacer></v-spacer>
          <v-toolbar-items class="toolbar-items">
            <nuxt-link :to="{ path: '/aboutme'}" title="About" class="full-height">
              <v-btn flat>About</v-btn>
            </nuxt-link>
            <nuxt-link :to="{ path: '/'}" title="Blog" class="hidden-sm-and-down full-height">
              <v-btn flat>Blog</v-btn>
            </nuxt-link>

            <v-tooltip bottom>
              <v-btn slot="activator" flat @click.native="toggleDarkMode()" style="height: 100%">
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    class="icon-path"
                    d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
                  ></path>
                </svg>
              </v-btn>
              <span>Toggle Dark-Mode</span>
            </v-tooltip>
            <userAvatarButton :user="user"></userAvatarButton>
          </v-toolbar-items>
        </v-flex>
      </v-layout>
    </v-toolbar>

    <nuxt/>

    <v-toolbar>
      <v-layout row style="height:100%">
        <v-flex lg8 offset-lg2 md10 offset-md1 sm12 style="display:flex;">
          <v-toolbar-items>
            <nuxt-link :to="{ path: '/aboutme'}" title="About" class="full-height">
              <v-btn flat>About</v-btn>
            </nuxt-link>
            <nuxt-link :to="{ path: '/legal'}" title="Legal Notice" class="full-height">
              <v-btn flat>Legal Notice</v-btn>
            </nuxt-link>
            <nuxt-link :to="{ path: '/privacy'}" title="Privacy" class="full-height">
              <v-btn flat>Privacy</v-btn>
            </nuxt-link>
            <nuxt-link :to="{ path: '/'}" title="Blog" class="hidden-sm-and-down full-height">
              <v-btn flat>Blog</v-btn>
            </nuxt-link>
          </v-toolbar-items>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <!-- <v-snackbar
      :timeout="timeout"
      :bottom="y === 'bottom'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat color="white" @click.native="consent()">OK</v-btn>
    </v-snackbar>-->
    <emailPopUp v-bind:show="dialog" v-on:close="dialog = false"></emailPopUp>
  </v-app>
</template>
<script>
import logo from "~/components/logo.vue";
import emailPopUp from "~/components/emailPopUp.vue";
import userAvatarButton from "~/components/user-avatar-button.vue";
export default {
  components: { logo, emailPopUp, userAvatarButton },
  data() {
    return {
      dark: false,
      snackbar: false,
      y: "bottom",
      x: null,
      mode: "multi-line",
      timeout: 0,
      text:
        "Cookies help to improve this Website! By using this site you agree, that we may save cookies on your device.",
      dialog: false,
      consent: false,
      email: ""
    };
  },
  mounted() {
    // if (typeof window !== 'undefined') {
    //     let cookie = document.cookie;
    //     if (/consentCookie=true/.test(cookie)) {
    //         this.snackbar = false;
    //     } else {
    //         this.snackbar = true;
    //     }
    // }
    //document.body.addEventListener('mouseleave', this.onExitIntent);
    if (process.client && window) {
      window.history.scrollRestoration = "auto";
    }
    const rawToken = localStorage.getItem("token");
    if (rawToken) {
      const token = JSON.parse(rawToken);
      if (this.verifyToken(token.access_token)) {
        if (token && token.user) {
          this.$store.commit("setUser", token.user);
        }
        if (token && token.access_token) {
          this.$store.commit("setToken", token.access_token);
        }
      } else {
        localStorage.removeItem("token");
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    themeColor() {
      return this.$store.state.themeColor;
    },
    darkMode() {
      return this.$store.state.darkMode;
    }
  },

  methods: {
    // consent() {
    //     if (document) {
    //         let now = new Date().getTime();
    //         const date = new Date((now += 86400000 * 365));
    //         document.cookie = 'consentCookie=true;expires=' + date.toUTCString() + ';path=/;';
    //     }
    //     this.snackbar = false;
    // },
    verifyToken(token) {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const tokenObject = JSON.parse(atob(base64));

        if (tokenObject.exp <= Date.now() / 1000) {
          return false;
        }
      } catch (error) {
        return false;
      }
      return true;
    },
    toggleDarkMode() {
      this.$store.commit("setDarkMode", !this.darkMode);
    },
    onExitIntent(event) {
      document.body.removeEventListener("mouseleave", this.onExitIntent);
      this.dialog = true;
    }
  }
};
</script>
<style>
html {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* color: #333 !important; */

  margin: 0;
  padding: 0;
  min-height: 100%;
  overflow: auto;
}

body {
  margin: 0;
  padding: 0;
}

.theme--dark.application {
  background-color: #1f2e41 !important;
}

.theme--light.application {
  color: hsl(202, 57%, 15%) !important;
}

.theme--dark.application .v-toolbar {
  background-color: #1a2335 !important;
}

.theme--dark.application .v-card {
  background-color: #0e1125 !important;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;
}

.theme--light.application .v-card {
  color: hsl(202, 57%, 15%) !important;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;
}

.theme--light.application .grey--text {
  color: hsl(203, 15%, 47%) !important;
}

.application.theme--dark .icon-path {
  fill: white;
}

.application.theme--light .icon-path {
  fill: hsl(202, 57%, 15%) !important;
}

.v-toolbar__content {
  padding: 0 !important;
}

.theme--dark .v-tabs__bar {
  background-color: transparent !important;
}

.small-print {
  font-size: 13px;
}

.full-height {
  height: 100%;
}

.toolbar-items {
  display: flex;
}

.layout-logo {
  height: 100%;
  padding: 5px;
}
@media screen and (max-width: 400px) {
  .layout-logo {
    height: 40px;
    margin-top: 8px;
  }
}

a {
  text-decoration: none !important;
  color: inherit;
}

a:hover {
  text-decoration: none !important;
}

.application.theme--light .v-toolbar {
  background-color: white !important;
}

/* roboto-300 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: url("/fonts/roboto-v18-latin-300.eot"); /* IE9 Compat Modes */
  src: local("Roboto Light"), local("Roboto-Light"),
    url("/fonts/roboto-v18-latin-300.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v18-latin-300.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v18-latin-300.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v18-latin-300.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v18-latin-300.svg#Roboto")
      format("svg"); /* Legacy iOS */
}
/* roboto-regular - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: url("/fonts/roboto-v18-latin-regular.eot"); /* IE9 Compat Modes */
  src: local("Roboto"), local("Roboto-Regular"),
    url("/fonts/roboto-v18-latin-regular.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v18-latin-regular.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v18-latin-regular.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v18-latin-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v18-latin-regular.svg#Roboto")
      format("svg"); /* Legacy iOS */
}
/* roboto-500 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: url("/fonts/roboto-v18-latin-500.eot"); /* IE9 Compat Modes */
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url("/fonts/roboto-v18-latin-500.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v18-latin-500.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v18-latin-500.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v18-latin-500.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v18-latin-500.svg#Roboto")
      format("svg"); /* Legacy iOS */
}
/* roboto-700 - latin */
@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: url("/fonts/roboto-v18-latin-700.eot"); /* IE9 Compat Modes */
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url("/fonts/roboto-v18-latin-700.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("/fonts/roboto-v18-latin-700.woff2") format("woff2"),
    /* Super Modern Browsers */ url("/fonts/roboto-v18-latin-700.woff")
      format("woff"),
    /* Modern Browsers */ url("/fonts/roboto-v18-latin-700.ttf")
      format("truetype"),
    /* Safari, Android, iOS */ url("/fonts/roboto-v18-latin-700.svg#Roboto")
      format("svg"); /* Legacy iOS */
}

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url("/fonts/MaterialIcons-Regular.eot"); /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url("/fonts/MaterialIcons-Regular.woff2") format("woff2"),
    url("/fonts/MaterialIcons-Regular.woff") format("woff"),
    url("/fonts/MaterialIcons-Regular.ttf") format("truetype");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
</style>
