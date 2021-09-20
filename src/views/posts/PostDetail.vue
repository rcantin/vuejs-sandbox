<template>
  <div class="pb-5">
    <div class="d-flex justify-content-start align-items-center mb-4">
      <div class="pe-3">
        <router-link :to="{ name: 'Posts' }" class="btn btn-primary"><i class="fas fa-chevron-left me-2"></i>Back</router-link>
      </div>
      <h1 class="mb-0">Post Details</h1>
    </div>
    <h4 class="text-capitalize">{{ post.title }}</h4>
    <div class="pb-5">{{ post.body }}</div>
    <h5>
      Comments <span class="fw-light small ps-3">({{ comments.length }} comments found)</span>
    </h5>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Posted by</th>
          <th>Comment Title</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(comment, index) in comments" :key="index">
          <td>{{ comment.email }}</td>
          <td>{{ comment.name }}</td>
          <td>{{ comment.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "../../../node_modules/axios";

export default {
  props: ["id"],
  data() {
    return {
      post: null,
      comments: null,
      postreturned: false,
      commentsreturned: false,
    };
  },
  methods: {
    getPost: function () {
      this.postreturned = false;
      axios.get("https://jsonplaceholder.typicode.com/posts/" + this.id, {}).then((response) => {
        var rawdata = response.data;
        this.postreturned = true;
        this.post = rawdata;
        console.log(this.post);
      });
    },
    getComments: function () {
      this.postreturned = false;
      axios.get("https://jsonplaceholder.typicode.com/posts/" + this.id + "/comments", {}).then((response) => {
        var rawdata = response.data;
        this.commentsreturned = true;
        this.comments = rawdata;
        console.log(this.comments);
      });
    },
  },
  mounted() {
    this.getComments();
    this.getPost();
  },
};
</script>
