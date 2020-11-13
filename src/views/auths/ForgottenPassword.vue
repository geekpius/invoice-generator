<template>
  <v-card width="500" class="mx-auto mt-20">
    <v-card-title>
      <h1 class="display-1 info--text">Reset Password</h1>
    </v-card-title>
    <v-form @submit.prevent="resetPassword">
      <v-card-text>
        <v-text-field
          v-validate="{ required: true, email: true }"
          v-model="email"
          name="email"
          label="Email"
          type="email"
          prepend-icon="mdi-email"
        />
        <span class="error--text ml-8" v-if="submitted">{{
          errors.first("email")
        }}</span>
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
  data: () => ({
    email: null,
    submitted: false
  }),
  methods: {
    async resetPassword() {
      let email = this.email;
      this.submitted = true;
      let result = await this.$validator.validate();
      console.log("result: ", result);
      console.log("submitted: ", email);
    }
  }
};
</script>

<style scoped>
.mt-20 {
  margin-top: 150px;
}
</style>
