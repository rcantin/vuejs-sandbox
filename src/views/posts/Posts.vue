<template>
  <div>
    <h1>Dynamic Routes</h1>
    <table class="table table-sm table-striped">
      <thead>
        <tr>
          <th>Post</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td class="text-capitalize">{{ item.title }}</td>
          <td class="text-end">
            <router-link :to="{ name: 'PostDetail', params: { id: item.id } }" class="nav-link">Details...</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../../../node_modules/axios";

export default {
  name: "DynamicRoutes",
  data() {
    return {
      data: null,
      dataloaded: Boolean,
    };
  },
  methods: {
    getData: function () {
      this.dataloaded = false;
      axios.get("https://jsonplaceholder.typicode.com/posts", {}).then((response) => {
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

<style></style>
