import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCAld7l50Ugv-G7MEMB9OmDSmuL1FVfTjo",
  authDomain: "shoppinglistapp-ac2f3.firebaseapp.com",
  databaseURL: "https://shoppinglistapp-ac2f3.firebaseio.com",
  projectId: "shoppinglistapp-ac2f3",
  storageBucket: "shoppinglistapp-ac2f3.appspot.com",
  messagingSenderId: "237242508096",
  appId: "1:237242508096:web:63fbc3c482e9285d4790a5",
  measurementId: "G-P1QM0WX95E"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')