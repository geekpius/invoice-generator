<template>
  <div class="ma-5">
    <Heading :head-text="heading" />
  </div>
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
