<template>
  <div v-if="!showBlock">Loading...</div>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
  RT:{{ reactionTime }}
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
	  setTimeout(() => {
	    this.timer = setInterval(() => {
          this.reactionTime += 5;
        }, 5);
	  }, 200);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
    },
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log("updated");
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background-color: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 10px auto;
}
</style>
