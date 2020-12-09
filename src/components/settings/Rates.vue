<template>
  <div>
    <div class="pt-4">
      <v-card elevation="2">
        <v-card-title>Percentage Rate</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <RateForm />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import RateForm from "@/components/settings/RateForm.vue";
export default {
  name: "Rates",
  components: {
    RateForm
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
