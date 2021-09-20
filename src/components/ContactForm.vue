<template>
  <div>
    <!-- <h4>Send us a message</h4> -->
    <form>
      <div class="row">
        <div class="col-6 mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" v-model="name" class="form-control" id="name" />
        </div>
        <div class="col-6 mb-3">
          <label for="regarding" class="form-label">Regarding</label>
          <select v-model="selected" class="form-select">
            <option v-for="option in regarding" v-bind:value="option.value" v-bind:key="option.id">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="col-6 mb-3">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" v-model="email" class="form-control" id="email" />
        </div>
        <div class="col-6 mb-3">
          <label for="phone" class="form-label">Phone</label>
          <input type="tel" v-model="phone" class="form-control" id="phone" />
        </div>
        <div class="col-12 mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea v-model="message" class="form-control w-100" id="message" rows="4" />
        </div>
        <div class="pt-4">
          <div class="small fw-light pb-3">Please allow a couple of business days for us to properly address your message and respond to you.</div>
          <div><button class="btn btn-success btn-lg w-100">Send Message</button></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      message: null,
      selected: "",
      regarding: [
        { id: 0, text: "", value: "" },
        { id: 1, text: "Something", value: "something" },
        { id: 2, text: "Another Thing", value: "another thing" },
        { id: 3, text: "Some Other Thing", value: "some other thing" },
      ],
    };
  },
};
</script>
