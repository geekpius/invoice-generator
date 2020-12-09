<template>
  <div class="ma-5">
    <Heading :head-text="heading" />

    <v-tabs v-model="tab">
      <v-tab>NOTIFICATIONS</v-tab>
      <v-tab>PERCENTAGE RATES</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div>Under Construction</div>
      </v-tab-item>
      <v-tab-item>
        <Rates />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import Rates from "@/components/settings/Rates.vue";
export default {
  name: "Settings",
  title: "Settings",
  components: {
    Heading,
    Rates
  },
  data() {
    return {
      heading: "Settings",
      tab: null,
      items: ["ACCOUNT", "INFORMATION"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>
