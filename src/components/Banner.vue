<template>
  <div id="nav">
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link to="/"><img src="../assets/r2d2-white.svg" height="30px" alt="" /></router-link>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"><a href="#" class="nav-link" data-bs-toggle="offcanvas" data-bs-target="#SideNav" aria-controls="SideNav">Side Nav</a></li>
            <li class="nav-item">
              <!-- <router-link to="/about" class="nav-link">About</router-link> -->
              <a href="#" class="nav-link" data-bs-toggle="modal" data-bs-target="#contactformModal">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <ContactFormModal />
  </div>
</template>

<script>
import ContactFormModal from "@/components/ContactFormModal.vue";

export default {
  name: "Banner",
  components: {
    ContactFormModal,
  },
};
</script>
