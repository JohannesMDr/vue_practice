export default {
  namespaced: true,
  state: {
    drawer: false,
  },
  actions: {
    toggleSideMenu({commit}) {
      commit('toggleSideMenu')
    },
  },
  mutations: {
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
  },
}