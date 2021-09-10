import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import Classes from "../views/Classes.vue";
import Grid from "../views/Grid.vue";
import BgBlend from "../views/BgBlend.vue";
import OffCanvas from "../views/OffCanvas.vue";
import Posts from "../views/posts/Posts.vue";
import PostDetail from "../views/posts/PostDetail.vue";

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
    component: About,
  },
  {
    path: "/contactus",
    name: "Contact Us",
    component: ContactUs,
  },
  {
    path: "/classes",
    name: "ClassList",
    component: Classes,
  },
  {
    path: "/grid",
    name: "Grid",
    component: Grid,
  },
  {
    path: "/bgblend",
    name: "BgBlend",
    component: BgBlend,
  },
  {
    path: "/offcanvas",
    name: "OffCanvas",
    component: OffCanvas,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: PostDetail,
    props: true, // allow passing of props instead of more complex params
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
