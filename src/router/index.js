import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Pages/Home';
import About from '@/components/Pages/About';
import Portfolio from '@/components/Pages/Portfolio';
import Blog from '@/components/Pages/Blog';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/About',
      name: 'AboutMe',
      component: About,
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio,
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog,
    },
  ],
});
