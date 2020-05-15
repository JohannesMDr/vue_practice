<template>
  <v-app>
    <v-app-bar
      app
      color="orange accent-3"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Shopping List App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>Log in</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text>Log out</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </v-app>
</template>

<script>
// import firebase from 'firebase'
import SideNav from './components/SideNav'
// import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav,
  },
  data: () => ({
    //
  }),
  created () {
    // firebase.auth().onAuthStateChanged(user => {
      //
    // })
  },
  methods: {
    // ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser'])
  }
};
</script>
