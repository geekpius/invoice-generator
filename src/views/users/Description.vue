<template>
  <div class="ma-5">
    <Heading :head-text="heading" />

    <div class="pt-4">
      <v-card elevation="2">
        <v-card-title class="pl-10"> <MaterialForm /></v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" sm="4">
              <DescriptionForm :material-names="materialNames" />
            </v-col>
            <v-col cols="12" sm="8">
              <DescriptionList :description-list="materialDescriptions" />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
import DescriptionForm from "@/components/material/DescriptionForm.vue";
import DescriptionList from "@/components/material/DescriptionList.vue";
import MaterialForm from "@/components/material/MaterialForm.vue";
import { mapGetters } from "vuex";
export default {
  name: "Description",
  title: "Material description",
  components: {
    Heading,
    DescriptionForm,
    DescriptionList,
    MaterialForm
  },
  data() {
    return {
      heading: "Material Description"
    };
  },
  methods: {
    async getMaterial() {
      this.$store.dispatch("materials/fetchMaterial");
    },
    async getMaterialDescription() {
      this.$store.dispatch("materials/fetchMaterialDescription");
    }
  },
  created() {
    this.getMaterial();
    this.getMaterialDescription();
  },
  computed: {
    ...mapGetters({
      materialNames: "materials/getMaterialNames",
      materialDescriptions: "materials/getMaterialDescriptionList"
    })
  }
};
</script>
