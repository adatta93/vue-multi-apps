<template>
  <div class="tabs-container">
    <div class="tabs">
      <router-link to="/reaction-timer">Reaction Timer</router-link>
      <router-link to="/web-form">Web Form</router-link>
      <router-link to="/ninja-jobs">Ninja Jobs</router-link>
      <router-link to="/dojo-blogs">Dojo Blogs</router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
import WebForm from "./pages/WebForm.vue";
import ReactionTimer from "./pages/ReactionTimer.vue";
import NinjaJobs from "./pages/NinjaJobs.vue";

export default {
  name: "App",
  components: {
    WebForm,
    ReactionTimer,
    NinjaJobs,
  },
  data() {
    return {
      selectedTab: "reactionTimer",
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  margin-top: 60px;
}
.tabs-container {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
}
.tabs {
  display: flex;
  align-items: center;
}
.tabs a {
  border: 1px solid white;
  background-color: #ddd;
  color: black;
  margin: 0 5px;
  padding: 5px 10px;
  text-decoration: none;
}
.tabs a:hover {
  background-color: #fff;
}
</style>
