<template>
  <div class="ma-5">
    <Heading :head-text="heading" />
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
export default {
  name: "Profile",
  title: "Profile",
  components: {
    Heading
  },
  data: () => ({
    heading: "Profile"
  }),
  created() {
    this.$store.dispatch("users/fetchProfile");
  },
  computed: {
    users() {
      return this.$store.state.users.profile;
    }
  }
};
</script>
