<template>
  <v-form @submit.prevent="saveMaterialDescription">
    <v-card-text>
      <v-select
        :items="getMaterialNames"
        v-validate="{ required: true }"
        name="profile"
        v-model="formData.profile"
        label="Material Profile"
      ></v-select>
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
        v-model="formData.unit_price"
        name="unit_price"
        label="Unit Price"
        type="number"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("unit_price")
      }}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn class="info pl-8 pr-8" :disabled="isBtnClicked" type="submit">
        <v-icon left>mdi-check-circle</v-icon> Add New</v-btn
      >
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  name: "DescriptionForm",
  props: {
    materialNames: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      formData: {
        profile: null,
        description: null,
        unit_price: null
      },
      isSubmitted: false,
      isBtnClicked: false
    };
  },
  methods: {
    async saveMaterialDescription() {
      this.isSubmitted = true;
      this.isBtnClicked = true;
      let results = await this.$validator.validate();
      if (results) {
        await this.$store.dispatch(
          "materials/saveMaterialDescription",
          this.formData
        );
        this.isSubmitted = false;
        this.isBtnClicked = false;
        this.formData.profile = null;
        this.formData.description = null;
        this.formData.unit_price = null;
      } else {
        this.isBtnClicked = false;
      }
    }
  },
  computed: {
    getMaterialNames() {
      return this.materialNames;
    }
  }
};
</script>
