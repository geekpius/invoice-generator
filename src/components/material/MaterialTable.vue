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
      <template v-slot:item.amount="{ item }">
        <span :class="getColor('blue--text')">
          {{ item.amount }}
        </span>
      </template>

      <template v-slot:item.vat="{ item }">
        <span :class="getColor('blue--text')">
          {{ item.vat }}
        </span>
      </template>

      <template v-slot:item.total="{ item }">
        <span :class="getColor('green--text')">
          {{ item.total }}
        </span>
      </template>

      <template v-slot:item.actions="{}">
        <v-icon small class="mr-2 primary--text">
          mdi-printer
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
  name: "MaterialTable",
  data() {
    return {
      search: "",
      headers: [
        { text: "CREATED AT", value: "createdAt" },
        { text: "INVOICE#", value: "invoiceNo" },
        { text: "CLIENT", value: "name" },
        { text: "PHONE", value: "calories" },
        { text: "NO(ITEMS)", value: "item" },
        { text: "AMOUNT", value: "amount", align: "right" },
        { text: "VAT", value: "vat", align: "center" },
        { text: "TRANSPORTATION", value: "transportation", align: "right" },
        { text: "INSTALLATION", value: "installation", align: "right" },
        { text: "TOTAL COST", value: "total", align: "right" },
        { text: "ACTIONS", value: "actions", align: "center", sortable: false }
      ],
      desserts: [
        {
          createdAt: "DD-MM-YYYY",
          invoiceNo: "123456",
          name: "Frozen Yogurt",
          calories: "0542398441",
          item: 159,
          amount: 6.0,
          vat: "6%(100)",
          transportation: 504.0,
          installation: 688.0,
          total: 45444.42
        },
        {
          createdAt: "DD-MM-YYYY",
          invoiceNo: "123456",
          name: "Ice cream sandwich",
          calories: "0542398441",
          item: 159,
          amount: 9.0,
          vat: "6%(100)",
          transportation: 504.0,
          installation: 688.0,
          total: 45444.42
        },
        {
          createdAt: "DD-MM-YYYY",
          invoiceNo: "123456",
          name: "Eclair",
          calories: "0542398441",
          item: 159,
          amount: 16.0,
          vat: "6%(100)",
          transportation: 504.0,
          installation: 688.0,
          total: 45444.42
        },
        {
          createdAt: "DD-MM-YYYY",
          invoiceNo: "123456",
          name: "Cupcake",
          calories: "0542398441",
          item: 159,
          amount: 3.7,
          vat: "6%(100)",
          transportation: 504.0,
          installation: 688.0,
          total: 45444.42
        },
        {
          createdAt: "DD-MM-YYYY",
          invoiceNo: "123456",
          name: "Gingerbread",
          calories: "0542398441",
          item: 159,
          amount: 16.0,
          vat: "6%(100)",
          transportation: 504.0,
          installation: 688.0,
          total: 45444.42
        }
      ]
    };
  },
  methods: {
    getColor(color) {
      return color;
    }
  }
};
</script>
