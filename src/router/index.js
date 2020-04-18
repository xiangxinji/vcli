import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import HomePage from "@/pages/Home/index.vue";

const getPagePath = (pageName) => {
  return `@/pages/${pageName}/index.vue`;
};

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/target",
      component: () => import(`@/pages/Target/index.vue`),
    },
  ],
});

export default router;
