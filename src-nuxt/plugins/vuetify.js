import Vue from 'vue';
import { Vuetify, VApp, VCard, VNavigationDrawer, VFooter, VList, VBtn, VIcon, VGrid, VToolbar, VSnackbar, VTooltip } from 'vuetify';

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VSnackbar,
    VTooltip
  },
  theme: {
    primary: '#333333',
    secondary: '#D50000',
    accent: '#c40030',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
});
