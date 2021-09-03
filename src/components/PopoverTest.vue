<template>
  <div className="container p-5">
    <button
      type="button"
      class="btn btn-success btn-sm text-white text-nowrap"
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      data-bs-trigger="focus"
      data-bs-content="Here's a flippin' sweet sample of a popover using Bootstrap 5"
      title="Sweet Popover!"
    >
      Popover Test
    </button>
  </div>
</template>
<script>
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Popover } from "../../node_modules/bootstrap/dist/js/bootstrap.esm.min.js";
export default {
  mounted() {
    Array.from(
      document.querySelectorAll('button[data-bs-toggle="popover"]')
    ).forEach((popoverNode) => new Popover(popoverNode));
  },
};
</script>
