<template>
  <div>
    <div class="pt-4">
      <v-card elevation="2" class="amber">
        <v-card-title>Account Expired</v-card-title>
        <v-card-text
          >This user account has been expired! Login accesss has been
          revoked.</v-card-text
        >
      </v-card>
    </div>
    <div class="pt-4 mt-4">
      <v-card elevation="2">
        <v-card-title>Basic Information</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <AccountForm />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
    <div class="pt-4 mt-4">
      <AccountActivity />
    </div>
  </div>
</template>

<script>
import AccountForm from "@/components/profile/AccountForm.vue";
import AccountActivity from "@/components/profile/AccountActivity.vue";
export default {
  name: "Account",
  components: {
    AccountForm,
    AccountActivity
  },
  data: () => ({
    formData: {
      email: null,
      name: null
    },
    isSubmitted: false
  }),
  methods: {
    async updateAccount() {
      this.isSubmitted = true;
      await this.$validator.validate();
    }
  }
};
</script>
