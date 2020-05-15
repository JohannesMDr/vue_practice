import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase'

Vue.use(Vuex)

export default userManagement = {
  namespaced: true,
  state : {
    login_user: null,
  },
  getters: {},
  actions: {
    setLoginUser({commit}, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser({commit}) {
      commit('deleteLoginUser')
    },
    login() {
      // const google_auth_provider = new.firebase.auth.GoogleAuthProvider()
      // firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout() {
      // firebase.auth().signOut()
    },
  },
  mutations: {
    setLoginUser(state, user) {
      state.login_user = user
    },
    deleteLoginUser(state) {
      state.login_user = null
    },
  },
}

export default new Vuex.Store({
  state: {
    drawer: false,
    recipes: []
  },
  mutations: {

    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    // addRecipe (state) {},
    // updateRecipe (state) {},
    // deleteRecipe (state) {},
  },
  actions: {},
  modules: {}
})