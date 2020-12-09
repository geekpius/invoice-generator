<template>
  <div>
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field
          name="transportation"
          label="Transportation Charges"
          type="number"
          title="Transportation Charges"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          name="installation"
          label="Installation Charges"
          type="number"
          title="Installation Charges"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-text-field
          name="vat"
          label="VAT Charges"
          type="number"
          title="VAT Charges"
          readonly
        />
      </v-col>
      <v-col cols="12">
        <v-simple-table fixed-header height="500px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  DESCRIPTION
                </th>
                <th class="text-left">
                  LENGTH
                </th>
                <th class="text-left">
                  QTY
                </th>
                <th class="text-right">
                  UNIT PRICE
                </th>
                <th class="text-right">
                  TOTAL PRICE
                </th>
                <th class="text-center">
                  REMOVE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.length }}</td>
                <td class="primary--text">{{ item.quantity }}</td>
                <td class="text-right">{{ item.unitPrice }}</td>
                <td class="text-right primary--text">{{ item.totalPrice }}</td>
                <td class="text-center">
                  <v-icon small class="error--text">
                    mdi-delete
                  </v-icon>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "AddedDescriptionList",
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          length: 159,
          quantity: 159,
          unitPrice: 159,
          totalPrice: 159
        },
        {
          name: "Ice cream sandwich",
          length: 159,
          quantity: 159,
          unitPrice: 159,
          totalPrice: 159
        },
        {
          name: "Eclair",
          length: 159,
          quantity: 159,
          unitPrice: 159,
          totalPrice: 159
        },
        {
          name: "Cupcake",
          length: 159,
          quantity: 159,
          unitPrice: 159,
          totalPrice: 159
        },
        {
          name: "Gingerbread",
          length: 159,
          quantity: 159,
          unitPrice: 159,
          totalPrice: 159
        },
        {
          name: "Jelly bean",
          length: 159,
          quantity: 159,
          unitPrice: 159,
          totalPrice: 159
        },
        {
          name: "Lollipop",
          length: 159,
          quantity: 159,
          unitPrice: 159,
          totalPrice: 159
        }
      ]
    };
  }
};
</script>
