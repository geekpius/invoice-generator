<template>
  <v-form @submit.prevent="updateInformation">
    <v-card-text>
      <v-select :items="items" label="Material Profile"></v-select>
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("profile")
      }}</span>

      <v-text-field
        v-validate="{ required: true }"
        v-model="formData.description"
        name="description"
        label="Description"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("description")
      }}</span>

      <v-text-field
        v-validate="{
          required: true,
          decimal: 2
        }"
        v-model="formData.price"
        name="price"
        label="Unit Price"
        type="number"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("price")
      }}</span>
    </v-card-text>

    <v-card-actions>
      <v-btn class="info pl-8 pr-8" type="submit">
        <v-icon left>mdi-check-circle</v-icon> Add New</v-btn
      >
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  name: "DescriptionForm",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    formData: {
      profile: null,
      description: null,
      price: null
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
