<template>
  <v-form @submit.prevent="updateAccount">
    <v-card-text>
      <v-text-field
        v-validate="{ required: true, email: true }"
        v-model="formData.email"
        name="email"
        label="Email"
        type="email"
        readonly
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
  name: "AccountForm",
  data: () => ({
    formData: {
      email: null,
      name: null
    },
    isSubmitted: false
  }),
  methods: {
    async updateAccount() {
      this.isSubmitted = true;
      await this.$validator.validate();
    }
  }
};
</script>
