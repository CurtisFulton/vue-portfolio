import Vue from 'vue';
import App from './App';
import router from './router';

import normalizeCSS from './assets/normalize.css'
import coreCSS from './assets/styles.css'

import NavBar from './components/NavBar.vue'

Vue.component('v-nav-bar', NavBar);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
