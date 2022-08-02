<template>
  <p>Your Score: {{ score }}</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 400) {
      this.rank = "Ninja Fighter";
    } else if (this.score < 700) {
      this.rank = "Rapid Reflex";
    } else {
      this.rank = "Snail Pace...";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
