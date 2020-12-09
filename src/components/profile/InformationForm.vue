<template>
  <v-form @submit.prevent="updateInformation">
    <v-card-text>
      <v-text-field
        v-validate="{ required: true, email: true }"
        v-model="formData.email"
        name="email"
        label="Email"
        type="email"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("email")
      }}</span>

      <v-text-field
        v-validate="{ required: true }"
        v-model="formData.name"
        name="name"
        label="Name"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("name")
      }}</span>

      <v-text-field
        v-validate="{
          required: true,
          digits: 10
        }"
        v-model="formData.phone"
        name="phone"
        label="Phone"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("phone")
      }}</span>

      <v-text-field
        v-validate="{ required: true }"
        v-model="formData.location"
        name="location"
        label="Location"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("location")
      }}</span>

      <v-text-field
        v-validate="{ required: true }"
        v-model="formData.address"
        name="address"
        label="Address"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("address")
      }}</span>

      <v-text-field
        v-validate="{ required: true }"
        v-model="formData.digital_address"
        name="digital_address"
        label="Digital Address"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("digital_address")
      }}</span>
    </v-card-text>

    <v-card-actions>
      <v-btn class="info pl-8 pr-8" type="submit">
        <v-icon left>mdi-cached</v-icon> Update</v-btn
      >
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  name: "InformationForm",
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
