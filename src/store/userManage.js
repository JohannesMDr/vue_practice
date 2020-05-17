import firebase from 'firebase'

export default {
  namespaced: true,
  state : {
    login_user: null,
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
  },
  actions: {
    setLoginUser({commit}, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser({commit}) {
      commit('deleteLoginUser')
    },
    login() {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout() {
      firebase.auth().signOut()
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