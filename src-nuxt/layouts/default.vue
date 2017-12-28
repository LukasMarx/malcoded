<template>
  <div class="outer-container">
      <v-toolbar>
        
        <v-layout column style="height:100%; margin: 8px">
          <v-flex offset-xs0 offset-sm1 offset-md1 offset-lg2 xs12 sm10 md10 lg8 style="height:100%">
            <div style="height:100%">
            <svg heigth="56px" style="height:56px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 1000 220" xml:space="preserve">
              <style type="text/css">
                .st0{fill:#DD0031;}
                .st1{fill:#C3002F;}
                .st2{fill:#FFFFFF;}
              </style>
              <g transform="translate(0,50)">
              <text x="0" y="125" font-family="Verdana" font-size="180" fill="#333">m</text>
              <g transform="translate(150, -60)">
                <polygon class="st0" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 	"/>
                <polygon class="st1" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 	"/>
                <!-- <path class="st2" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1 -->
                  <!-- L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/> -->
              </g>
              <text x="220" y="125" font-family="Verdana" font-size="180" fill="white">a</text>
              <text x="380" y="125" font-family="Verdana" font-size="180" fill="#333">lcoded</text>
              </g>
            </svg>
            <!-- <v-spacer></v-spacer> -->
            <!-- <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon> -->
            <!-- <v-toolbar-items> -->
              <div style="height:100%; float:right">
              <nuxt-link :to="{ path: '/'}" title="Blog">
                <v-btn aria-label="Blog" class="toolbar-button" flat>Blog</v-btn>
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
            <nuxt-link :to="{ path: '/'}" title="Blog">
              <v-btn aria-label="Blog" class="toolbar-button" flat>Blog</v-btn>
            </nuxt-link>
            <!-- <nuxt-link :to="{ path: '/aboutme'}">
              <v-btn class="toolbar-button" flat>About Me</v-btn>
            </nuxt-link> -->
            <nuxt-link :to="{ path: '/legal'}" title="Legal Notice">
              <v-btn aria-label="Legal Notice" class="toolbar-button" flat>Legal Notice</v-btn>
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
      <v-btn aria-label="Accept Cookies" flat color="pink" @click.native="consent()">Ok</v-btn>
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

      if (/consentCookie=true/.test(cookie)) {
        this.snackbar = false;
      } else {
        this.snackbar = true;
      }
    }
  },
  methods: {
    consent() {
      if (document) {
        let now = new Date().getTime();
        const date = new Date((now += 86400000 * 365));
        document.cookie = 'consentCookie=true;expires=' + date.toUTCString() + ';path=/;';
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

.outer-container {
  min-height: 100vh;
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
  height: 56px;
  margin: 0 !important;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
