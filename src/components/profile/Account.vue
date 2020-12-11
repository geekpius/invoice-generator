<template>
  <div>
    <div class="pt-4">
      <v-card elevation="2" class="amber">
        <v-card-title v-if="user.is_expired">Account Expired</v-card-title>
        <v-card-title v-else>Account Is Not Expired</v-card-title>
        <v-card-text v-if="user.is_expired"
          >This user account has been expired! Login accesss has been
          revoked.</v-card-text
        >
        <v-card-text v-else
          >This user account has not expired yet! Expiration date
          {{ expiredDate }}.</v-card-text
        >
      </v-card>
    </div>
    <div class="pt-4 mt-4">
      <v-card elevation="2">
        <v-card-title>Basic Information</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <AccountForm
                :form-values="{ email: user.email, name: user.name }"
              />
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
import { mapGetters } from "vuex";
export default {
  name: "Account",
  components: {
    AccountForm,
    AccountActivity
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      user: "auth/getCurrentUser"
    }),
    expiredDate() {
      return new Date(this.user.expired_at)
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric"
        })
        .replace(/ /g, "-");
    }
  }
};
</script>
