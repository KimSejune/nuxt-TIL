<template>
  <div>
    <form @submit.prevent="login" method="post">
      <div>
        <label for="username">username: </label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">password: </label>
        <input id="password" type="text" v-model="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async login() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const response = await this.$axios.$post("/member/login", userData);
      console.log("login resposne ", response);
    },
  },
};
</script>

<style></style>
