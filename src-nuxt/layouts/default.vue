<template>
  <div class="outer-container">
      <v-toolbar>
        
        <v-layout column style="height:100%; margin: 8px">
          <v-flex offset-xs0 offset-sm1 offset-md1 offset-lg2 xs12 sm10 md10 lg8 style="height:100%">
            <div style="height:100%">
            <img style="height:56px; float: left" src="malcoded.svg"/>
            <!-- <v-spacer></v-spacer> -->
            <!-- <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon> -->
            <!-- <v-toolbar-items> -->
              <div style="height:100%; float:right">
              <nuxt-link :to="{ path: '/'}">
                <v-btn class="toolbar-button" flat>Blog</v-btn>
              </nuxt-link>
              </div>
              <!-- <nuxt-link :to="{ path: '/aboutme'}">
                <v-btn class="toolbar-button" flat>About Me</v-btn>
              </nuxt-link> -->
            <!-- </v-toolbar-items> -->
            </div>
          </v-flex>
        </v-layout>
      </v-toolbar>
      <div class="default-container grey lighten-4">
        <v-flex style="display:flex" offset-xs0 offset-sm1 offset-md1 offset-lg2 xs12 sm10 md10 lg8 >
          <nuxt/>
        </v-flex>
      </div>
      
      <v-toolbar>
        <v-layout column style="height:100%; margin: 0">
          <v-flex offset-xs0 offset-sm1 offset-md1 offset-lg2 xs12 sm10 md10 lg8 style="height:100%">
          <v-toolbar-items>
            <nuxt-link :to="{ path: '/'}">
              <v-btn class="toolbar-button" flat>Blog</v-btn>
            </nuxt-link>
            <!-- <nuxt-link :to="{ path: '/aboutme'}">
              <v-btn class="toolbar-button" flat>About Me</v-btn>
            </nuxt-link> -->
            <nuxt-link :to="{ path: '/legal'}">
              <v-btn class="toolbar-button" flat>Legal Notice</v-btn>
            </nuxt-link>
          </v-toolbar-items>
          </v-flex>
        </v-layout>
      </v-toolbar>
       <v-snackbar
        :timeout="timeout"
        :top="y === 'top'"
        :bottom="y === 'bottom'"
        :right="x === 'right'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'"
        v-model="snackbar"
      >
      {{ text }}
       <!-- <nuxt-link :to="{ path: '/legal'}">
        <v-btn flat color="white">More</v-btn>
       </nuxt-link> -->
      <v-btn flat color="pink" @click.native="consent()">Ok</v-btn>
    </v-snackbar>

  </div>
</template>
<script>
export default {
  data() {
    return {
      snackbar: false,
      y: 'bottom',
      x: null,
      mode: 'multi-line',
      timeout: 0,
      text:
        'Cookies help to improve this Website! By using this site you agree, that we may save cookies on your device.'
    };
  },
  mounted() {
    if (typeof window !== 'undefined') {
      let cookie = document.cookie;
      const split = cookie.split(';');
      for (let s of split) {
        if (s === 'consentCookie=true' || s === ' consentCookie=true') {
          this.snackbar = false;
        } else {
          this.snackbar = true;
        }
      }
    }
  },
  methods: {
    consent() {
      if (document) {
        let now = new Date().getTime();
        const date = new Date((now += 86400000 * 365));
        document.cookie = 'consentCookie=true;expires=' + date.toUTCString() + ';path=/';
      }
      this.snackbar = false;
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
  color: #333 !important;
}
.default-container {
  flex: 1;
  display: flex;
}

.outer-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.icon-color {
  color: #333;
}

.icon-color:hover {
  color: #c3002f;
}

.large-icon {
  font-size: 64px;
}

.toolbar-button {
  height: 100%;
  margin: 0 !important;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
