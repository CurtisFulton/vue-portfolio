import Vue from 'vue'
import vueApp from './vueApp.vue';

import vueMaterial from 'vue-material';

import styles from './sass/styles.scss';

Vue.use(vueMaterial);
var vue = new Vue({
	el: '#app',
	render: h => h(vueApp),
	template: '<vueApp></vueApp>'
});


if (module.hot) {
	module.hot.accept();
}