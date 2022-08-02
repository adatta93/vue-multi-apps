<template>
  <h1>Web Form</h1>
  <SignupForm />
</template>

<script>
import SignupForm from "../components/signup-form/SignupForm.vue";

export default {
  name: "App",
  components: {
    SignupForm,
  },
  data() {
    return {
      isPlaying: false,
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
</style>
