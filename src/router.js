import { createRouter, createWebHistory } from "vue-router";
import pageHome from "./pages/Home.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: pageHome,
    }
  ],
});

router.beforeEach((to, from, next) => {
  console.log({to, from});
  next();
});