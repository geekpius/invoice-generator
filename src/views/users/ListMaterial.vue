<template>
  <div class="ma-5">
    <Heading :head-text="heading" />

    <div class="pt-4">
      <v-card elevation="2">
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <MaterialTable />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import MaterialTable from "@/components/material/MaterialTable.vue";
export default {
  name: "ListMaterial",
  title: "List material invoice",
  components: {
    Heading,
    MaterialTable
  },
  data() {
    return {
      heading: "List Material Invoice"
    };
  }
};
</script>
