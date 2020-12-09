<template>
  <div class="mt-4" align="center">
    <v-list-item-avatar tile size="180" color="grey rounded">
      <v-img
        max-height="150"
        max-width="250"
        src="https://picsum.photos/id/11/500/300"
        alt="Geek"
      ></v-img>
    </v-list-item-avatar>
    <div class="mt-4">
      <v-btn small>
        Update Logo
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "InformationLogo",
  data: () => ({})
};
</script>
