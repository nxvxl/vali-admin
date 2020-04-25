import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from './components/layouts/Layout';
import Dashboard from './components/pages/Dashboard';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Dashboard
        }
      ]
    }
  ]
});

export default router;