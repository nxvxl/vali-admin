import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from './components/layouts/Layout';
import Dashboard from './components/pages/Dashboard';
import PageLogin from './components/pages/PageLogin';
import HelloWorld from './components/HelloWorld';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: '',
          redirect: 'dashboard'
        }
      ]
    },
    {
      path: '/page-login',
      component: PageLogin
    },
    {
      path: '*',
      component: HelloWorld
    }
  ]
});

export default router;