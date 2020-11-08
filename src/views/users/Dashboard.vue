<template>
  <Heading :head-text="heading" />
</template>

<script>
import Heading from "@/components/Heading.vue";
export default {
  name: "Dashboard",
  title: "Dashboard",
  components: {
    Heading
  },
  data: () => ({
    heading: "Dashboard"
  })
};
</script>
