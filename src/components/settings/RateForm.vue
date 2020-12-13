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
          v-model="percentage.vat"
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
          v-model="percentage.discount"
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
import { mapGetters } from "vuex";
export default {
  name: "InformationForm",
  data() {
    return {
      formData: this.percentage,
      isSubmitted: false,
      isSuccess: false,
      responseText: null
    };
  },
  methods: {
    async getPercentage() {
      this.$store.dispatch("settings/fetchPercentage");
    },
    async updatePercentage() {
      this.isSubmitted = true;
      let results = await this.$validator.validate();
      if (results) {
        try {
          await this.$store.dispatch("settings/updatePercentage", {
            vat: this.percentage.vat,
            discount: this.percentage.discount
          });
          this.isSuccess = true;
          this.responseMsg = "Percentage updated successful";
        } catch (error) {
          this.isSuccess = false;
          this.responseMsg = "Percentage update failed";
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      percentage: "settings/getPercentage"
    })
  },
  created() {
    this.getPercentage();
  }
};
</script>
