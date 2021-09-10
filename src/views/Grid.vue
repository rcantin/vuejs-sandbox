<template>
  <div>
    <h1>Grid Stuff</h1>
    <div v-if="!dataloaded" class="p-4 text-center fw-light">Loading data...</div>
    <div v-if="dataloaded" class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-5 pb-5">
      <div class="col" v-for="(item, index) in data" :key="index">
        <div class="card shadow h-100" style="border-top-right-radius: 4rem; border-bottom-left-radius: 2rem; overflow: hidden">
          <img v-bind:src="'https://picsum.photos/350/200?random=' + item.id" alt="..." class="card-img-top" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 90%)" />
          <div class="card-body">
            <div class="fw-light small">
              <h5 class="text-capitalize">{{ item.name }}</h5>
              <div>Username: {{ item.username }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../node_modules/axios";

export default {
  name: "Grid",
  data() {
    return {
      data: null,
      dataloaded: Boolean,
    };
  },
  methods: {
    getData: function () {
      this.dataloaded = false;
      axios.get("https://jsonplaceholder.typicode.com/users", {}).then((response) => {
        var rawdata = response.data;
        this.dataloaded = true;
        this.data = rawdata;
        console.log(this.data);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
