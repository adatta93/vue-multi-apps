<template>
  <div v-if="job">
    <h1>
      {{ job.title }}
    </h1>
    <p>Job ID: {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>Loading job details...</div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
      //id: this.$route.params.id,
    };
  },
  mounted() {
    fetch("http://localhost:4000/jobs/" + this.id) // requires json-server
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch(() => {
        let jobs = [
          { title: "UX Developer Lv.2", id: 1, details: "lorem" },
          { title: "UI Developer", id: 2, details: "lorem" },
          { title: "Vue Developer", id: 3, details: "lorem" },
        ];
        this.job = jobs.find((j) => j.id == this.id);
      });
  },
};
</script>

<style></style>
