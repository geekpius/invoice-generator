<template>
  <div>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="getDescriptionList"
      :search="search"
    >
      <!-- <template v-slot:item.actions="{ item }"> -->
      <template v-slot:item.actions="{}">
        <v-icon small class="mr-2 primary--text">
          mdi-pencil
        </v-icon>
        <v-icon small class="error--text">
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "DescriptionList",
  props: {
    descriptionList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "PROFILE", align: "start", value: "profile" },
        { text: "DESCRIPTION", value: "description" },
        { text: "UNIT PRICE", value: "unit_price", align: "right" },
        { text: "ACTIONS", value: "actions", sortable: false, align: "center" }
      ]
    };
  },
  computed: {
    getDescriptionList() {
      return this.descriptionList;
    }
  }
};
</script>
