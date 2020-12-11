<template>
  <div>
    <span
      class="ml-4"
      :class="isSuccess ? 'success--text' : 'error--text'"
      v-if="isSuccess"
      >{{ responseMsg }}</span
    >
    <v-form @submit.prevent="updateUser">
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("email")
      }}</span>
      <v-card-text>
        <v-text-field
          v-validate="{ required: true, email: true }"
          v-model="formData.email"
          name="email"
          label="Email"
          type="email"
          readonly
          outlined
          dense
        />

        <span class="error--text" v-if="isSubmitted">{{
          errors.first("name")
        }}</span>
        <v-text-field
          v-validate="{ required: true }"
          v-model="formData.name"
          name="name"
          label="Name"
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
  name: "AccountForm",
  props: {
    formValues: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formData: this.formValues,
      isSubmitted: false,
      responseMsg: null,
      isSuccess: false
    };
  },
  methods: {
    async updateUser() {
      this.isSubmitted = true;
      let results = await this.$validator.validate();
      if (results) {
        try {
          await this.$store.dispatch("users/updateUser", this.formData);
          this.isSuccess = true;
          this.responseMsg = "Account updated successful";
        } catch (error) {
          this.isSuccess = false;
          this.responseMsg = "Account update failed";
        }
        this.isSubmitted = false;
      }
    }
  }
};
</script>
