<template>
  <div class="ma-5">
    <Heading :head-text="heading" />

    <div class="pt-4">
      <v-card elevation="2">
        <v-card-title>Generate Invoice</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12">
              <ClientForm />
            </v-col>
            <v-col cols="12" sm="4">
              <GenerateForm />
            </v-col>
            <v-col cols="12" sm="7" offset-sm="1">
              <AddedDescriptionList />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import ClientForm from "@/components/material/ClientForm.vue";
import AddedDescriptionList from "@/components/material/AddedDescriptionList.vue";
import GenerateForm from "@/components/material/GenerateForm.vue";
export default {
  name: "Generate",
  title: "Generate material profile invoice",
  components: {
    Heading,
    AddedDescriptionList,
    ClientForm,
    GenerateForm
  },
  data() {
    return {
      heading: "Generate Material Profile Invoice"
    };
  }
};
</script>
