<template>
  <h1>Job</h1>
  <div v-if="loading">Loading...</div>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    fetch("http://localhost:4000/jobs") // requires json-server
      .then((res) => res.json())
      .then((data) => {
        this.jobs = data;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.jobs = [
          { title: "UX Developer Lv.2", id: 1, details: "lorem" },
          { title: "UI Developer", id: 2, details: "lorem" },
          { title: "Vue Developer", id: 3, details: "lorem" },
        ];
      });
  },
};
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
