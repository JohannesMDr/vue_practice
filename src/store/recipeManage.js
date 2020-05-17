export default {
  namespaced: true,
  state: {
    recipes: [],
  },
  getters: {
    getRecipeById: state => id => state.recipes.find(recipe => recipe.id === id)
  },
  actions: {
    fetchRecipe({getters, commit}) {
      firebase.firestore().collection(`users/${getters.uid}/recipes`).get()
        .then(snapshot => {
          snapshot.forEach(
            doc => commit('addRecipe', {id:doc.id, address: doc.data()})
            )
        })
    },
    addRecipe({getters, commit}, recipe) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/recipes`).add(recipe)
          .then(doc => {commit('addRecipe', {id:doc.id, recipe})})
      }
    },
    updateRecipe({getters, commit}, {id, recipe}) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/recipes`).doc(id).update(recipe)
          .then(() => {commit('updateRecipe', {id, recipe})})
      }
    },
    deleteRecipe({getters, commit}, {id}) {
      if (getters.uid) {
        firebase.firestore().collection(`users/${getters.uid}/recipes`).doc(id).delete()
          .then(() => {commit('deleteRecipe', {id})})
      }
    },

  },
  mutations: {
    addRecipe(state, {id, recipe}) {
      recipe.id = id
      state.recipes.push(recipe)
    },
    updateRecipe(state, {id, recipe}) {
      const index = state.recipes.findIndex(recipe => recipe.id === id)
      state.recipes[index] = recipe
    },
    deleteRecipe(state, {id}) {
      const index = state.recipes.findIndex(recipe => recipe.id === id)
      state.recipes.splice(index, 1)
    },
  },
}