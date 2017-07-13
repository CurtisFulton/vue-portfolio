import Vue from 'vue'
import VueRouter from 'vue-router';
import vueApp from './vueApp.vue';

import styles from './sass/styles.scss';

import Home from './pages/home.vue';
import About from './pages/about.vue';
import Portfolio from './pages/portfolio.vue';
import Contact from './pages/contact.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/about', name: 'about', component: About },
		{ path: '/portfolio', name: 'portfolio', component: Portfolio },
		{ path: '/contact', name: 'contact', component: Contact }
	]
});

const app = new Vue({
	router,
	render: h => h(vueApp)
}).$mount('#app');

/*
const vue = new Vue({
	el: '#app',
	render: h => h(vueApp),
	template: '<vueApp></vueApp>'
});
*/

if (module.hot) {
	module.hot.accept();
}