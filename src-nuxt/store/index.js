import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      token: null,
      themeColor: '#c40030',
      darkMode: false
    },
    mutations: {
      setUser(state, user) {
        state.user = user ? Object.assign({}, user) : null;
      },
      setToken(state, token) {
        state.token = token;
      },
      setThemeColor(state, color) {
        state.themeColor = color;
      },
      setDarkMode(state, mode) {
        state.darkMode = mode;
      }
    },
    actions: {
      signOut(context) {
        context.commit('setToken', null);
        context.commit('setUser', null);
      }
    }
  });
};

export default createStore;
