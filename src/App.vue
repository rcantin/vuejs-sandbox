<template>
  <div id="app">
    <SideNav></SideNav>
    <Banner></Banner>
    <div class="container pt-5 mt-5 pb-5">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import SideNav from "./components/SideNav.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    SideNav,
    Banner,
    Footer,
  },
};
</script>
