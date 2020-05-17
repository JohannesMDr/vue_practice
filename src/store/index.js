import Vue from 'vue'
import Vuex from 'vuex'
import recipeManage from './recipeManage'
import userManage from './userManage'
import sideNavManage from './sideNavManage'
// import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userManage,
    sideNavManage,
    recipeManage
  }
})

// export default hogehoge = {
//   namespaced: true,
//   state: {},
//   getters: {},
//   actions: {},
//   mutations: {},
// }