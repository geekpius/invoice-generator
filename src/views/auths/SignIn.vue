<template>
  <v-card width="500" class="mx-auto mt-20">
    <v-card-title>
      <h1 class="display-1 info--text">Sign In</h1>
    </v-card-title>
    <div v-if="responseText" class="ml-4 text-center">
      <span v-if="responseText.success" class="success--text">{{
        responseText.success
      }}</span>
      <span v-else class="error--text">{{ responseText.error }}</span>
    </div>

    <v-form @submit.prevent="login">
      <v-card-text>
        <v-text-field
          v-validate="{ required: true, email: true }"
          v-model="credentials.email"
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
          v-model="credentials.password"
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
        <v-btn class="info pl-8 pr-8" :disabled="isSubmitted" type="submit"
          >Sign In</v-btn
        >
      </v-card-actions>

      <v-divider></v-divider>

      <v-card-actions>
        <span
          >Don't have an account?
          <router-link :to="{ name: 'Signup' }" class="error--text"
            >Sign up</router-link
          ></span
        >
        <v-spacer></v-spacer>
        <span class="">
          <router-link :to="{ name: 'Forgotten' }"
            >Forgotten password</router-link
          >
        </span>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Signin",
  title: "Sign in",
  data: () => ({
    showPassword: false,
    credentials: {
      email: null,
      password: null
    },
    isSubmitted: false
  }),
  methods: {
    async login() {
      this.isSubmitted = true;
      let result = await this.$validator.validate();
      if (result) {
        this.$store.dispatch("auth/loginUser", this.credentials).then(() => {
          this.$router.push({ name: "Dashboard" });
        });
        this.isSubmitted = false;
      }
    }
  },
  computed: {
    ...mapGetters({
      responseText: "auth/getTesponseText"
    })
  }
};
</script>

<style scoped>
.mt-20 {
  margin-top: 150px;
}
</style>
