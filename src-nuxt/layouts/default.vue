<template>
  <div class="outer-container">
      <div class="default-toolbar">
    
          <div class="col-xs-offset-0 col-sm-offset-1 col-md-offset-1 col-lg-offset-2 col-xs-12 col-sm-10 col-md-10 col-lg-8" style="height:100%">
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
                <polygon class="st0" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2"/>
                <polygon class="st1" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30"/>
              </g>
              <text x="220" y="125" font-family="Verdana" font-size="180" fill="white">a</text>
              <text x="380" y="125" font-family="Verdana" font-size="180" fill="#333">lcoded</text>
              </g>
            </svg>

              <div style="height:100%; float:right">
              <nuxt-link :to="{ path: '/'}" title="Blog">
                <button aria-label="Blog" class="toolbar-button" flat>Blog</button>
              </nuxt-link>
              </div>
              <!-- <nuxt-link :to="{ path: '/aboutme'}">
                <v-btn class="toolbar-button" flat>About Me</v-btn>
              </nuxt-link> -->
            <!-- </v-toolbar-items> -->
            </div>
          </div>

      </div>
      <div class="row" style="margin:0">
        <div class="col-xs-offset-0 col-sm-offset-1 col-md-offset-1 col-lg-offset-2 col-xs-12 col-sm-10 col-md-10 col-lg-8" >
          <nuxt/>
        </div>
      </div>
      
      <div class="default-toolbar">
        <div>
          <div class="col-xs-offset-0 col-sm-offset-1 col-md-offset-1 col-lg-offset-2 col-xs-12 col-sm-10 col-md-10 col-lg-8" style="height:100%">

            <nuxt-link :to="{ path: '/'}" title="Blog">
              <button aria-label="Blog" class="toolbar-button">Blog</button>
            </nuxt-link>
            <!-- <nuxt-link :to="{ path: '/aboutme'}">
              <v-btn class="toolbar-button" flat>About Me</v-btn>
            </nuxt-link> -->
            <nuxt-link :to="{ path: '/legal'}" title="Legal Notice">
              <button aria-label="Legal Notice" class="toolbar-button">Legal Notice</button>
            </nuxt-link>

          </div>
        </div>
      </div>
       <div class="snackbar" v-if="snackbar">
      {{ text }}
      <button aria-label="Accept Cookies" color="pink" v-on:click="consent()">OK</button>
    </div> 

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
.snackbar {
  position: fixed;
  padding: 16px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  right: auto;
  margin-left: auto;
  margin-right: auto;
  background-color: #333;
  color: white;
}
@media screen and (max-width: 960px) {
  .snackbar {
    width: 100%;
  }
}

.col {
  padding-left: 4px !important;
  padding-right: 4px !important;
}

.default-toolbar {
  height: 56px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  width: 100%;
}

.default-container {
  width: 100%;
}

.outer-container {
  min-height: 100vh;
  background-color: #f5f5f5;
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
.grey--text {
  color: #999;
}

button {
  color: inherit;
  background-color: transparent;
  outline: none;
  border-width: 0;
  transition: background-color 0.3s;
  padding: 16px;
  font-weight: 700;
}

button:hover {
  background-color: #ddd !important;
}

.toolbar-button {
  height: 56px;
  margin: 0 !important;
}

.toolbar-button:hover {
  background-color: #ddd !important;
}

a {
  text-decoration: none !important;
  color: inherit !important;
}

a:hover {
  text-decoration: none !important;
}
</style>
