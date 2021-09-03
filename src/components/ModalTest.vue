<template>
  <div className="container p-5">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-danger btn-sm text-nowrap"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Modal Test
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Modal } from "../../node_modules/bootstrap/dist/js/bootstrap.esm.min.js";
export default {
  mounted() {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="modal"]')
    ).forEach((modalNode) => new Modal(modalNode));
  },
};
</script>
