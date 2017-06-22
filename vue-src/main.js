import Vue from 'vue'
import vueApp from './vueApp.vue';

new Vue({
	el: '#app',
	render: h => h(vueApp),
	template: '<vueApp></vueApp>'
})

if (module.hot) {
	module.hot.accept();
}