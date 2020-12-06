<template>
  <v-card width="500" class="mx-auto mt-20">
    <v-card-title>
      <h1 class="display-1 info--text">Sign Up</h1>
    </v-card-title>
    <v-form @submit.prevent="register">
      <v-card-text>
        <v-text-field
          v-validate="{ required: true, max: 60 }"
          v-model="formData.name"
          name="name"
          label="Full Name"
          prepend-icon="mdi-account"
        />
        <span class="error--text ml-8" v-if="isSubmitted">{{
          errors.first("name")
        }}</span>

        <v-text-field
          v-validate="{ required: true, email: true }"
          v-model="formData.email"
          name="email"
          label="Email"
          type="email"
          prepend-icon="mdi-email"
        />
        <span class="error--text ml-8" v-if="isSubmitted">{{
          errors.first("email")
        }}</span>

        <v-text-field
          v-validate="{ required: true, min: 6 }"
          v-model="formData.password"
          name="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
        <span class="error--text ml-8" v-if="isSubmitted">{{
          errors.first("password")
        }}</span>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="success pl-8 pr-8" type="submit">Sign Up</v-btn>
      </v-card-actions>

      <v-divider></v-divider>
      <v-card-actions>
        <span
          >Already have an account?
          <router-link :to="{ name: 'Signin' }">Sign in</router-link></span
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "Signup",
  title: "Sign up",
  data: () => ({
    showPassword: false,
    formData: {
      name: null,
      email: null,
      password: null
    },
    isSubmitted: false
  }),
  methods: {
    async register() {
      this.isSubmitted = true;
      let result = await this.$validator.validate();
      if (result) {
        this.$store.dispatch("auth/registerUser", this.formData).then(() => {
          this.$router.push({ name: "Dashboard" });
        });
        this.formData.email = null;
        this.formData.name = null;
        this.formData.password = null;
        this.isSubmitted = false;
      }
    }
  }
};
</script>

<style scoped>
.mt-20 {
  margin-top: 150px;
}
</style>
