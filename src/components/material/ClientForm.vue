<template>
  <v-row class="pl-4 pr-4">
    <v-col cols="12" sm="6">
      <v-text-field
        v-validate="{ required: true }"
        v-model="formData.client"
        name="client"
        label="Client Name"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("client")
      }}</span>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-validate="{ required: true }"
        v-model="formData.location"
        name="location"
        label="Client Location"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("location")
      }}</span>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-validate="{ required: true, numeric: true, max: 10 }"
        v-model="formData.phone"
        name="phone"
        label="Client Phone Number"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("phone")
      }}</span>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-validate="{ required: true, email: true }"
        v-model="formData.email"
        name="email"
        label="Client Email"
      />
      <span class="error--text" v-if="isSubmitted">{{
        errors.first("email")
      }}</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    formData: {
      client: null,
      location: null,
      phone: null,
      email: null
    },
    isSubmitted: false
  })
};
</script>
