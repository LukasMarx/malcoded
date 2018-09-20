import Vue from 'vue';
import { Vuetify, VApp, VCard, VBtn, VIcon, VGrid, VToolbar, VSnackbar, VTooltip, VDialog, VTextField, VCheckbox, VForm, VSpeedDial } from 'vuetify';
import * as LRU from 'lru';

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
    VForm,
    VSpeedDial
  },
  theme: {
    primary: '#c40030',
    secondary: '#c40030',
    accent: '#c40030',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
});
