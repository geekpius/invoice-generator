import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Forgotten from "../views/auths/ForgottenPassword.vue";
import Dashboard from "../views/users/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: false, showMenubar: true }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/forgotten",
    name: "Forgotten",
    component: Forgotten,
    meta: { requiresAuth: false, showMenubar: false }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true, showMenubar: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
