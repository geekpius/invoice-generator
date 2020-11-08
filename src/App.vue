<template>
  <v-app>
    <Navbar v-show="$route.meta.requiresAuth" />

    <v-main class="bg-color">
      <router-view></router-view>
    </v-main>
    <Footer v-show="$route.meta.requiresAuth" />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data: () => ({})
};
</script>
