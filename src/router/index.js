import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // this generates a separate chunk (about.[hash].js) for this route which is lazy-loaded when the route is visited
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contactus",
    name: "Contact Us",
    component: () => import("../views/ContactUs.vue"),
  },
  {
    path: "/classes",
    name: "Class List",
    component: () => import("../views/Classes.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/vuejs-sandbox/",
  routes,
});

export default router;
