import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/auths/SignIn.vue";
import Signup from "../views/auths/SignUp.vue";
import Forgotten from "../views/auths/ForgottenPassword.vue";
import Dashboard from "../views/users/Dashboard.vue";
import Profile from "../views/users/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresVisitor: true, showMenubar: true }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { requiresVisitor: true, showMenubar: true }
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
    meta: { requiresVisitor: true, showMenubar: false }
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
    meta: { requiresVisitor: true, showMenubar: false }
  },
  {
    path: "/forgotten",
    name: "Forgotten",
    component: Forgotten,
    meta: { requiresVisitor: true, showMenubar: false }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true, showMenubar: true }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true, showMenubar: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
