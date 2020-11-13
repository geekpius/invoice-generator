<template>
  <v-app>
    <Navbar v-if="$route.meta.showMenubar" />

    <v-main class="bg-color">
      <router-view></router-view>
    </v-main>
    <Footer v-if="$route.meta.showMenubar" />
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
