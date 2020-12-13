<template>
  <div>
    <span
      class="ml-4"
      :class="isSuccess ? 'success--text' : 'error--text'"
      v-if="isSuccess"
      >{{ responseText }}</span
    >
    <v-form @submit.prevent="updateProfile">
      <v-card-text>
        <v-text-field
          v-validate="{ required: true }"
          v-model="formData.name"
          name="name"
          label="Company Name"
        />
        <span class="error--text" v-if="isSubmitted">{{
          errors.first("name")
        }}</span>

        <v-text-field
          v-validate="{ required: true, email: true }"
          v-model="formData.email"
          name="email"
          label="Company Email"
          type="email"
        />
        <span class="error--text" v-if="isSubmitted">{{
          errors.first("email")
        }}</span>

        <v-text-field
          v-validate="{ required: true, digits: 10 }"
          v-model="formData.phone"
          name="phone"
          label="Company Phone"
          type="number"
        />
        <span class="error--text" v-if="isSubmitted">{{
          errors.first("phone")
        }}</span>

        <v-text-field
          v-validate="{ required: true }"
          v-model="formData.location"
          name="location"
          label="Company Location"
        />
        <span class="error--text" v-if="isSubmitted">{{
          errors.first("location")
        }}</span>

        <v-text-field
          v-model="formData.address"
          name="address"
          label="Company Address"
        />

        <v-text-field
          v-model="formData.digital_address"
          name="digital_address"
          label="Company Digital Address"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          class="info pl-8 pr-8 ml-2"
          :disabled="isBtnClicked"
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
    }
  },
  data() {
    return {
      isSubmitted: false,
      responseText: null,
      isSuccess: false,
      isBtnClicked: false
    };
  },
  methods: {
    async updateProfile() {
      this.isSubmitted = true;
      this.isBtnClicked = true;
      let results = await this.$validator.validate();
      if (results) {
        await this.$store.dispatch("users/updateProfile", {
          name: this.formData.name,
          email: this.formData.email,
          phone: this.formData.phone,
          location: this.formData.location,
          address: this.formData.address,
          digital_address: this.formData.digital_address
        });
        this.isSuccess = true;
        this.isSubmitted = false;
        this.isBtnClicked = false;
        this.responseText = "Profile updated successful";
      } else {
        this.isBtnClicked = false;
      }
    }
  },
  computed: {
    formData() {
      return this.formValues;
    }
  }
};
</script>
