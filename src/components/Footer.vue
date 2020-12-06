<template>
  <v-footer dark padless app inset>
    <v-card class="flex" flat tile color="purple darken-2" :elevation="10">
      <v-card-text class="py-2 white--text text-center">
        <strong>Invoice Generator</strong> —
        {{ new Date().getFullYear() }} &copy; Copyrights
      </v-card-text>
    </v-card>
  </v-footer>
</template>
