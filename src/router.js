import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from './components/layouts/Layout';
import Dashboard from './components/pages/Dashboard';
import PageLogin from './components/pages/PageLogin';

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
      ]
    },
    {
      path: '/page-login',
      component: PageLogin
    },
    {
      path: '',
      redirect: '/dashboard'
    }
  ]
});

export default router;