<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" />

    <label>Password</label>
    <input
      type="password"
      required
      v-model="password"
      :style="{ 'border-color': errBorder }"
    />
    <div class="error" v-if="passwordError">{{ passwordError }}</div>

    <label>Role</label>
    <select v-model="role">
      <option value="">Choose Role</option>
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills</label>
    <input
      type="text"
      v-model="tempSkills"
      @keyup="addSkills"
      placeholder="Type skill and press comma to add"
    />
    <div
      v-for="skill of skills"
      :key="skill"
      @click="deleteSkill(skill)"
      class="pill"
      title="Click to delete"
    >
      {{ skill }}
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="term" />
      <label>Accept terms and condition</label>
    </div>

    <div class="submit">
      <button>Create Account</button>
    </div>
  </form>
  <p>E:{{ email }} P:{{ password }} R:{{ role }}</p>
  <p>S:{{ skills }}</p>
  <p>T:{{ term }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      term: false,
      tempSkills: "",
      skills: [],
      passwordError: "",
      errBorder: "",
    };
  },
  methods: {
    addSkills(ev) {
      if (ev.key === ",") {
        let skill =
          ev.key === ","
            ? this.tempSkills.substring(0, this.tempSkills.length - 1).trim()
            : this.tempSkills.trim();
        if (skill && !this.skills.includes(skill)) {
          this.skills.push(skill);
        }
        this.tempSkills = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((sk) => sk !== skill);
    },
    handleSubmit() {
      console.log("form submitted");
      this.passwordError =
        this.password.length > 5 ? "" : "Password minimum length should be 6";
      this.errBorder = this.passwordError && "#ff0062";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  background: #222;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  color: #ccc;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: 0;
  border-bottom: 1px solid #ddd;
  color: #555;
  background: #444;
  color: #ccc;
  font-size: 1em;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background-color: #0faf87;
  color: white;
  border: 0;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
button:hover {
  background-color: #027d5e;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 6px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
