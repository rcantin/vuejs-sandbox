<template>
  <div>
    <HelloWorld msg="Vue.js Sandbox" />
    <div class="row">
      <div class="col-6">Here's some regular body text...</div>
      <div class="col">
        <div class="card shadow">
          <img src="https://picsum.photos/350/80?random=1" alt="..." class="card-img-top" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 70%)" />
          <div class="card-body px-4 pb-4 pt-0">
            <h4>Send us a message</h4>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ContactForm,
  },
};
</script>
