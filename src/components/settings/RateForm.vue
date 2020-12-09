<template>
  <v-form @submit.prevent="updateInformation">
    <v-card-text>
      <v-text-field
        v-validate="{
          required: true,
          numeric: true,
          max: 2
        }"
        v-model="formData.vat"
        name="vat"
        label="VAT"
        type="number"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("vat")
      }}</span>

      <v-text-field
        v-validate="{
          required: true,
          numeric: true,
          max: 2
        }"
        v-model="formData.discount"
        name="discount"
        label="DISCOUNT"
        type="number"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("discount")
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
      vat: null,
      discount: null
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
