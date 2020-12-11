<template>
  <div>
    <span
      class="ml-4"
      :class="isSuccess ? 'success--text' : 'error--text'"
      v-if="isSuccess"
      >{{ responseMsg }}</span
    >
    <v-form @submit.prevent="updateProfile">
      <v-card-text>
        <span class="error--text" v-if="isSubmitted">{{
          errors.first("name")
        }}</span>
        <v-text-field
          v-validate="{ required: true }"
          v-model="formValues.name"
          name="name"
          label="Company Name"
          outlined
          dense
        />

        <span class="error--text" v-if="isSubmitted">{{
          errors.first("email")
        }}</span>
        <v-text-field
          v-validate="{ required: true, email: true }"
          v-model="formValues.email"
          name="email"
          label="Company Email"
          type="email"
          outlined
          dense
        />

        <span class="error--text" v-if="isSubmitted">{{
          errors.first("phone")
        }}</span>
        <v-text-field
          v-validate="{ required: true, digits: 10 }"
          v-model="formValues.phone"
          name="phone"
          label="Company Phone"
          type="number"
          outlined
          dense
        />

        <span class="error--text" v-if="isSubmitted">{{
          errors.first("location")
        }}</span>
        <v-text-field
          v-validate="{ required: true }"
          v-model="formValues.location"
          name="location"
          label="Company Location"
          outlined
          dense
        />

        <v-text-field
          v-model="formValues.address"
          name="address"
          label="Company Address"
          outlined
          dense
        />

        <v-text-field
          v-model="formValues.digital_address"
          name="digital_address"
          label="Company Digital Address"
          outlined
          dense
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          class="info pl-8 pr-8 ml-2"
          :disabled="isSubmitted"
          type="submit"
        >
          <v-icon left>mdi-cached</v-icon> Update</v-btn
        >
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "InformationForm",
  props: {
    formValues: {
      type: Object,
      required: true
    },
    isSuccess: {
      type: Boolean,
      required: true
    },
    responseMsg: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isSubmitted: false
    };
  },
  methods: {
    async updateProfile() {
      this.isSubmitted = true;
      let results = await this.$validator.validate();
      if (results) {
        this.$emit("updateProfile", {
          name: this.formValues.name,
          email: this.formValues.email,
          phone: this.formValues.phone,
          location: this.formValues.location,
          address: this.formValues.address,
          digital_address: this.formValues.digital_address
        });
        this.isSubmitted = false;
      }
    }
  }
};
</script>
