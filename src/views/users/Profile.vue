<template>
  <div class="ma-5">
    <Heading :head-text="heading" />

    <v-tabs v-model="tab">
      <v-tab>ACCOUNT</v-tab>
      <v-tab>COMPANY INFORMATION</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Account />
      </v-tab-item>
      <v-tab-item>
        <Information />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import Account from "@/components/profile/Account.vue";
import Information from "@/components/profile/Information.vue";
export default {
  name: "Profile",
  title: "Profile",
  components: {
    Heading,
    Account,
    Information
  },
  data() {
    return {
      heading: "Profile",
      tab: null
    };
  },
  created() {
    // this.$store.dispatch("users/fetchProfile");
  },
  computed: {
    // user() {
    //   return this.$store.getters["users/getProfile"];
    // }
  }
};
</script>
