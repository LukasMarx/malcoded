<template>
  <div class="outer-container">
    <v-toolbar color="white">
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
        </v-toolbar-items>
        </div>

    </v-toolbar>

    <nuxt/>

    <v-toolbar color="white">
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
  </div>
  
</template>
<script>
import logo from '~/components/logo.vue';
export default {
    components: { logo },
    data() {
        return {
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
}

body {
    margin: 0;
    padding: 0;
}

.snack--bottom {
    left: 50%;
}

.outer-container {
    background-color: #f5f5f5;
}

.full-height {
    height: 100%;
}

.layout-logo {
    height: 54px;
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

@media screen and (min-width: 400px) {
    .toolbar-wrapper {
        width: 66.66% !important;
        margin-left: 16.66% !important;
        display: flex !important;
        height: 100% !important;
    }
}

a {
    text-decoration: none !important;
    color: inherit;
}

a:hover {
    text-decoration: none !important;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}
</style>
