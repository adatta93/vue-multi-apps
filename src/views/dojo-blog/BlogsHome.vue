<template>
  <div class="blog-home">
    <h1>Welcome to Dojo Blog</h1>
    <button @click="handleClick">Increase Age</button>
    <div class="input-container">
      <input type="text" v-model="name" placeholder="Enter your name" />
      <input type="text" v-model="age" placeholder="Enter your age" />
    </div>
    <p v-if="name && age">Name:{{ name }} Age:{{ age }}</p>
    <div v-if="error" style="color:red;">Error::{{ error }}</div>

    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../../components/dojo-blog/PostList.vue";
import { getPosts } from "../../composables/getPosts";
import { onMounted, reactive, ref, watch, watchEffect } from "vue";

export default {
  name: "BlogsHome",
  components: { PostList },
  setup() {
    const name = ref("");
    const age = ref(25);

    const { posts, error, load } = getPosts();

    load();

    watch(name, () => {
      console.log("watch n", name.value);
      //console.log("watch a", age.value);
    });

    watchEffect(() => {
      //console.log("watcheff n", name.value);
      console.log("watcheff", age.value);
    });

    const handleClick = () => {
      console.log("clicked", age);
      age.value += 5;
    };

    return { name, age, handleClick, posts, error };
  },
};
</script>

<style>
.blog-home .input-container {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.blog-home .input-container input {
  margin: 0 5px;
  background-color: white;
  max-width: 200px;
  color: black;
}
</style>
