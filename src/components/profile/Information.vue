<template>
  <div>
    <div class="pt-4">
      <v-card elevation="2">
        <v-card-title>Company Information</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" sm="3">
              <InformationLogo />
            </v-col>
            <v-col cols="12" sm="6">
              <InformationForm :form-values="userProfile" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import InformationForm from "@/components/profile/InformationForm.vue";
import InformationLogo from "@/components/profile/InformationLogo.vue";
import { mapGetters } from "vuex";
export default {
  name: "Information",
  components: {
    InformationForm,
    InformationLogo
  },
  data() {
    return {};
  },
  methods: {
    getProfile() {
      this.$store.dispatch("users/fetchProfile");
    }
  },
  created() {
    this.getProfile();
  },
  computed: {
    ...mapGetters({
      userProfile: "users/getProfile"
    })
  }
};
</script>
