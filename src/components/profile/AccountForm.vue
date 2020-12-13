<template>
  <div>
    <span
      class="ml-4"
      :class="isSuccess ? 'success--text' : 'error--text'"
      v-if="isSuccess"
      >{{ responseText }}</span
    >
    <v-form @submit.prevent="updateUser">
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
  name: "AccountForm",
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
    async updateUser() {
      this.isSubmitted = true;
      this.isBtnClicked = true;
      let results = await this.$validator.validate();
      if (results) {
        await this.$store.dispatch("auth/updateUser", this.formData);
        this.isSuccess = true;
        this.responseText = "Account updated successful";
        this.isSubmitted = false;
        this.isBtnClicked = false;
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
