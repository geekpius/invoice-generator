<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Add New Material Profile
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Material Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <span
                class="ml-4"
                :class="isSuccess ? 'success--text' : 'error--text'"
                v-if="isSuccess"
                >{{ responseText }}</span
              >
              <v-col cols="12">
                <v-text-field
                  v-validate="{ required: true }"
                  v-model="material"
                  name="material"
                  label="Material Profile"
                />
                <span class="error--text" v-if="isSubmitted">{{
                  errors.first("material")
                }}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            class="ml-3"
            :disabled="isBtnClicked"
            text
            @click="saveMaterial"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "MaterialForm",
  data() {
    return {
      dialog: false,
      material: null,
      isSubmitted: false,
      isBtnClicked: false,
      isSuccess: false,
      responseText: ""
    };
  },
  methods: {
    async saveMaterial() {
      this.isSubmitted = true;
      this.isBtnClicked = true;
      let results = await this.$validator.validate();
      if (results) {
        await this.$store.dispatch("materials/saveMaterial", {
          name: this.material
        });
        this.responseText = "Material profile saved successful";
        this.isSuccess = true;
        this.isSubmitted = false;
        this.isBtnClicked = false;
        this.material = null;
      } else {
        this.isBtnClicked = false;
      }
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  }
};
</script>
