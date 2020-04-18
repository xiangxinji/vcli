import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '@/pages/Home/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/target',
      component: () => import('@/pages/Target/index.vue'),
    },
  ],
});

export default router;
