import { createRouter, createWebHistory } from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ './pages/Home.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    }
  ],
});

router.beforeEach((to, from, next) => {
  console.log({to, from});
  window.scrollTo(0, 0)
  next();
});