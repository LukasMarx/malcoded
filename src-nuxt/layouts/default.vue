<template>
<v-app :dark="dark">

    <v-toolbar fixed scroll-off-screen>
        <div class="toolbar-wrapper">
        <logo></logo>
        <v-spacer></v-spacer>
        <v-toolbar-items >
            <nuxt-link :to="{ path: '/aboutme'}" title="About" class="full-height">
                <v-btn flat>About</v-btn>
            </nuxt-link>
            <nuxt-link :to="{ path: '/'}" title="Blog" class="hidden-sm-and-down full-height" >
                <v-btn flat>Blog</v-btn>
            </nuxt-link>

            

            <v-tooltip bottom>
                <v-btn slot="activator" flat @click.native="toggleDarkMode()">
                    <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path class="icon-path" d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/>
                    </svg>
                </v-btn>
             <span>Toggle Dark-Mode</span>
    </v-tooltip>
        </v-toolbar-items>
        </div>

    </v-toolbar>


        <nuxt style="margin-top: 64px"/>


    <v-toolbar>
        <div class="toolbar-wrapper">
            <v-toolbar-items>
                <nuxt-link :to="{ path: '/aboutme'}" title="About" class="full-height">
                    <v-btn flat>About</v-btn>
                </nuxt-link>
                <nuxt-link :to="{ path: '/legal'}" title="Legal Notice" class="full-height" >
                    <v-btn flat>Legal Notice</v-btn>
                </nuxt-link>
                <nuxt-link :to="{ path: '/'}" title="Blog" class="hidden-sm-and-down full-height" >
                    <v-btn flat>Blog</v-btn>
                </nuxt-link>
            </v-toolbar-items>
        </div>
    </v-toolbar>
    <v-snackbar
      :timeout="timeout"
      :bottom="y === 'bottom'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat color="white" @click.native="consent()">OK</v-btn>
    </v-snackbar>

</v-app>
  
</template>
<script>
import logo from '~/components/logo.vue';
export default {
    components: { logo },
    data() {
        return {
            dark: false,
            snackbar: false,
            y: 'bottom',
            x: null,
            mode: 'multi-line',
            timeout: 0,
            text: 'Cookies help to improve this Website! By using this site you agree, that we may save cookies on your device.'
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
        },
        toggleDarkMode() {
            this.dark = !this.dark;
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
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow: auto;
}

body {
    margin: 0;
    padding: 0;
}

.full-height {
    height: 100%;
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
.toolbar-wrapper {
    width: 100%;
    display: flex;
    height: 100%;
    margin-left: 8px !important;
}

@media screen and (min-width: 600px) {
    .toolbar-wrapper {
        width: 83.33% !important;
        margin-left: 8.33% !important;
        display: flex !important;
        height: 100% !important;
    }
}

@media screen and (min-width: 960px) {
    .toolbar-wrapper {
        width: 66.66% !important;
        margin-left: 16.66% !important;
        display: flex !important;
        height: 100% !important;
    }
}
.application--wrap {
    width: 100%;
}

a {
    text-decoration: none !important;
    color: inherit;
}

a:hover {
    text-decoration: none !important;
}

.application.theme--dark .icon-path {
    fill: white;
}

.application.theme--light .icon-path {
    fill: #333;
}

.application.theme--dark .logo-text {
    fill: white;
}

.application.theme--light .logo-text {
    fill: #333;
}

.application.theme--dark .icon-highlight :hover {
    fill: #c40030;
}

.application.theme--light .icon-highlight :hover {
    fill: #c40030;
}

.application.theme--light .toolbar {
    background-color: white !important;
}
/* width */
::-webkit-scrollbar {
    height: 12px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
