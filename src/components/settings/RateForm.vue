<template>
  <div>
    <span
      class="ml-4"
      :class="isSuccess ? 'success--text' : 'error--text'"
      v-if="isSuccess"
      >{{ responseMsg }}</span
    >
    <v-form @submit.prevent="updatePercentage">
      <v-card-text>
        <v-text-field
          v-validate="{
            required: true,
            decimal: 2
          }"
          v-model="formValues.vat"
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
            decimal: 2
          }"
          v-model="formValues.discount"
          name="discount"
          label="DISCOUNT"
          type="number"
        />
        <span class="error--text" v-if="isSubmitted">{{
          errors.first("discount")
        }}</span>
      </v-card-text>

      <v-card-actions>
        <v-btn class="info pl-8 pr-8 ml-2" type="submit">
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
    async updatePercentage() {
      this.isSubmitted = true;
      let results = await this.$validator.validate();
      if (results) {
        this.$emit("updatePercentage", {
          vat: this.formValues.vat,
          discount: this.formValues.discount
        });
      }
    }
  }
};
</script>
