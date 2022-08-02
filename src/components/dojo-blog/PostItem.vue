<template>
  <div class="post-item">
    <router-link :to="{ name: 'BlogDetails', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <h5>{{ post.tags }}</h5>
    <p>{{ post.body }}</p>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "....";
    });
    return { snippet };
  },
};
</script>

<style>
.post-item {
  max-width: 400px;
  border: 1px solid #0faf87;
  padding: 8px 20px;
}
.post-item a {
  color: #ccc;
}
.post-item a:hover {
  color: white;
}
</style>
