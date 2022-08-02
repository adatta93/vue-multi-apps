<template>
  <h3>Details of ID: {{ id }}</h3>
  <button @click="back">Go Back</button>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <div class="tag-container">
      <h4 v-for="tag in post.tags" :key="tag">{{ tag }}</h4>
    </div>
  </div>
  <div v-else>Loading Post Details...</div>
</template>

<script>
import { getPost } from "../../composables/getPost";
export default {
  props: ["id"],
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style>
.tag-container {
  display: flex;
  justify-content: center;
}
.tag-container h4 {
  background-color: #ccc;
  color: black;
  border-radius: 16px;
  margin: 0 8px;
  padding: 4px 8px;
}
</style>
