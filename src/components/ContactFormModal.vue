<template>
  <div class="modal fade" id="contactformModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Contact Us</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import ContactForm from "@/components/ContactForm.vue";
import { Modal } from "../../node_modules/bootstrap/dist/js/bootstrap.esm.min.js";

export default {
  components: {
    ContactForm,
  },
  mounted() {
    Array.from(document.querySelectorAll('button[data-bs-toggle="modal"]')).forEach((modalNode) => new Modal(modalNode));
  },
};
</script>
