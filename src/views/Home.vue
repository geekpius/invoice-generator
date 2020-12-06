<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <router-link to="/signin">Sign In</router-link> -->
    <router-link :to="{ name: 'Forgotten' }">Forgotten Password</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>
