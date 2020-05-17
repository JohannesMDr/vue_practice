<template>
  <v-app>
    <v-app-bar
      app
      color="orange accent-3"
      dark
    >
      <v-app-bar-nav-icon v-show="login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>Shopping List App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!login_user">
        <v-btn text @click="login">Login</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="login_user">
        <v-btn text @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <SideNav/>

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import SideNav from './components/SideNav'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav,
  },
  data: () => ({
    //
  }),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        // this.fetchRecipes()
        // if (this.$router.currentRoute.name == 'home') {
        //   this.$router.push({name:'addresses'}, ()=>{})
        // }
      } else {
        this.deleteLoginUser()
        // this.$router.push({name:'home'}, ()=>{})
      }
    })
  },
  methods: {
    // ...mapActions(['setLoginUser', 'logout', 'deleteLoginUser'])
    ...mapActions('sideNavManage', ['toggleSideMenu']),
    ...mapActions('userManage', ['login', 'setLoginUser', 'logout', 'deleteLoginUser']),
  },
  computed: {
    ...mapState({
      login_user: ({userManage}) => userManage.login_user
    })
  }
};
</script>
