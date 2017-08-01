import Vue from 'vue'
import VueRouter from 'vue-router';
import vueApp from './vueApp.vue';

import Vuetify from 'vuetify';
import styles from './sass/styles.scss';

import Home from './pages/home.vue';
import About from './pages/about.vue';
import Portfolio from './pages/portfolio.vue';
import Project from './pages/project.vue';
import Blog from './pages/blog.vue';

import components from './components/index.js';

for (var i in components) {
	Vue.component(components[i].name, components[i]);
}

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', name: 'home', component: Home },
		{ path: '/about', name: 'about', component: About },
		{ path: '/portfolio', name: 'portfolio', component: Portfolio },
		{ path: '/portfolio/:project', name: 'project', component: Project },
		{ path: '/Blog', name: 'Blog', component: Blog }
	]
});

const app = new Vue({
	router,
	render: h => h(vueApp)
}).$mount('#app');

if (module.hot) {
	module.hot.accept();
}