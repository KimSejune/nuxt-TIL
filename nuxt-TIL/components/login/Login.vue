<template>
  <div>
    <form @submit="login" method="post">
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
    login() {
      console.log("login :", this.username, this.passowrd);
    },
  },
};
</script>

<style></style>
