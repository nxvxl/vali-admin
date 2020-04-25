import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sidebarToggled: false
  },
  getters: {
    
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebarToggled = !state.sidebarToggled
    }
  },
  actions: {
    toggleSidebar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    }
  }
});

export default store;