<template>
  <v-card width="500" class="mx-auto mt-20">
    <v-card-title>
      <h1 class="display-1 info--text">Reset Password</h1>
    </v-card-title>
    <v-form>
      <v-card-text>
        <v-text-field
          name="email"
          label="Email"
          type="email"
          prepend-icon="mdi-email"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="info" type="submit">Reset Password</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "Forgotten",
  title: "Forgotten password",
  data: () => ({})
};
</script>

<style scoped>
.mt-20 {
  margin-top: 150px;
}
</style>
