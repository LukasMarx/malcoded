import Vue from 'vue';
import { Vuetify, VApp, VCard, VBtn, VIcon, VGrid, VToolbar, VSnackbar, VTooltip, VDialog, VTextField, VCheckbox, VForm } from 'vuetify';
import * as LRU from 'lru';

const themeCache = LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
});

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VSnackbar,
    VTooltip,
    VDialog,
    VTextField,
    VCheckbox,
    VForm
  },
  theme: {
    primary: '#c40030',
    secondary: '#c40030',
    accent: '#c40030',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  },
  options: {
    themeCache: themeCache,
    minifyTheme: function(val) {
      return process.env.NODE_ENV === 'production' ? val.replace(/[\s|\r\n|\r|\n]/g, '') : null;
    }
  }
});
