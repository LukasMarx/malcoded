import Vue from "vue";
import Vuetify, {
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
  VSpeedDial,
  VAvatar,
  VTextarea,
  VTabs,
  transitions,
  VMenu
} from "vuetify/lib";
import * as LRU from "lru-cache";

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
});

Vue.use(
  Vuetify,
  {
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
      VSpeedDial,
      VAvatar,
      VTextarea,
      VTabs,
      transitions,
      VMenu
    },
    theme: {
      primary: "#c40030",
      secondary: "#c40030",
      accent: "#c40030",
      error: "#f44336",
      warning: "#ffeb3b",
      info: "#2196f3",
      success: "#4caf50"
    }
  },
  {
    options: {
      minifyTheme: function(css) {
        return process.env.NODE_ENV === "production"
          ? css.replace(/[\s|\r\n|\r|\n]/g, "")
          : css;
      },
      themeCache
    }
  }
);
