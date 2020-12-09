<template>
  <div>
    <div class="pt-4">
      <v-card elevation="2">
        <v-card-title>Profile Information</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" sm="3">
              <InformationLogo />
            </v-col>
            <v-col cols="12" sm="6">
              <InformationForm />
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
export default {
  name: "Information",
  components: {
    InformationForm,
    InformationLogo
  },
  data: () => ({
    formData: {
      email: null,
      name: null,
      phone: null,
      location: null,
      address: null,
      digital_address: null
    },
    isSubmitted: false
  }),
  methods: {
    async updateInformation() {
      this.isSubmitted = true;
      await this.$validator.validate();
    }
  }
};
</script>
