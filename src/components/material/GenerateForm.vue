<template>
  <v-form @submit.prevent="updateInformation">
    <v-card-text>
      <v-select
        :items="items"
        v-validate="{ required: true }"
        name="profile"
        v-model="formData.profile"
        label="Material Profile"
      ></v-select>
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("profile")
      }}</span>

      <v-select
        :items="items"
        v-validate="{ required: true }"
        name="description"
        v-model="formData.description"
        label="Profile Description"
      ></v-select>
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

      <v-row>
        <v-col cols="12" sm="8">
          <v-text-field
            v-model="formData.total_price"
            name="total_price"
            label="Define Your Own Total Price"
            type="number"
            :disabled="!isCheckboxChecked"
          />
        </v-col>
        <v-col cols="12" sm="4">
          <v-checkbox
            v-model="isCheckboxChecked"
            label="Own Price"
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-text-field
        v-validate="{
          required: true,
          decimal: 2
        }"
        v-model="formData.length"
        name="length"
        label="Length(m)"
        type="number"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("length")
      }}</span>

      <v-text-field
        v-validate="{
          required: true,
          numeric: true
        }"
        v-model="formData.quantity"
        name="quantity"
        label="Quantity"
        type="number"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("quantity")
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
  name: "GenerateForm",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    formData: {
      profile: null,
      description: null,
      price: null,
      total_price: null,
      length: null,
      quantity: null
    },
    isCheckboxChecked: false,
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
