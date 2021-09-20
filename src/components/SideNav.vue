<template>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="SideNav" aria-labelledby="SideNavLabel">
    <div class="offcanvas-header">
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body pt-0">
      <div class="d-flex justify-content-center align-items-center flex-column text-center fs-5 fw-light">
        <div class="p-2"><router-link :to="{ name: 'Grid' }" data-bs-dismiss="offcanvas">Grid Stuff</router-link></div>
        <div class="p-2"><router-link :to="{ name: 'BgBlend' }" data-bs-dismiss="offcanvas">Background Blending</router-link></div>
        <div class="p-2"><router-link :to="{ name: 'Posts' }" data-bs-dismiss="offcanvas">Dynamic Routes</router-link></div>
        <div class="p-2"><router-link :to="{ name: 'About' }" data-bs-dismiss="offcanvas">About Us</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav",
};
</script>
