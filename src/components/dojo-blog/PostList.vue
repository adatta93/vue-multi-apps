<template>
  <h2>Post List</h2>
  <div v-if="posts && posts.length > 0" class="post-list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <div v-else>Loading Blog Posts...</div>
</template>

<script>
import PostItem from "./PostItem.vue";
import { computed } from "vue";

export default {
  props: ["posts"],
  components: { PostItem },
  setup(props) {},
};
</script>

<style>
.post-list {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
</style>
