<template>
  <div>
    <HelloWorld msg="Vue.js Sandbox" />
    <p>Here's some regular body text...</p>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
