<template>
  <v-container text-xs-center>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-center">
        <h1>Edit Recipe</h1>
      </v-flex>

      <v-flex xs5 mt-5>
        <v-card>
          <v-card-text>
            <v-form>
               <v-text-field v-model="recipe.title" label="title"></v-text-field>
               <v-text-field v-model="recipe.cookware" label="cookware"></v-text-field>
               <v-text-field v-model="recipe.src" label="imageURL"></v-text-field>
               <v-text-field v-model="recipe.color" label="color"></v-text-field>
               <div class="text-center">
                 <v-btn @click="$router.push({ name: 'recipe' })">cancel</v-btn>
                 <v-btn color="info" class="ml-2" @click="submit">save</v-btn>
               </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  created () {
    if (!this.$route.params.recipe_id) return
    const recipe = this.$store.getters.getRecipeById(this.$route.params.recipe_id)
    if (recipe) {
      this.recipe = recipe
    } else {
      this.$router.push({ name: 'recipe' })
    }
  },
  data () {
    return {
      recipe: {}
    }
  },
  methods: {
    submit () {
      if (this.$route.params.recipe_id) {
        this.updateRecipe({ id: this.$route.params.recipe_id, recipe: this.recipe })
      } else {
        this.addRecipe(this.recipe)
      }
      this.$router.push({ name: 'recipes' })
      this.recipe = {}
    },
    ...mapActions('recipeManage', ['addRecipe', 'updateRecipe'])
  }
}
</script>