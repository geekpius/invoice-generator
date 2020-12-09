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
    <v-data-table :headers="headers" :items="desserts" :search="search">
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
  data() {
    return {
      search: "",
      headers: [
        {
          text: "PROFILE",
          align: "start",
          // filterable: false,
          value: "name"
        },
        { text: "DESCRIPTION", value: "calories" },
        { text: "UNIT PRICE", value: "fat" },
        { text: "ACTIONS", value: "actions", sortable: false }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0
        }
      ]
    };
  }
};
</script>
