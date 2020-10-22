<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
      <!-- <SignIn /> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import SignIn from "@/views/SignIn.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: {
    // SignIn,
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
