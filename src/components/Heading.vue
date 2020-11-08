<template>
  <div class="ml-3">
    <h1 class="subheading grey--text">{{ headText }}</h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  props: {
    headText: {
      type: String,
      required: true
    }
  }
};
</script>
