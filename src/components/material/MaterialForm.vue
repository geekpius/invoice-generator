<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="500px">
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
          <v-btn color="blue darken-1" class="mr-3" text @click="saveMaterial">
            Save
          </v-btn>
          <v-btn color="error darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    material: null,
    isSubmitted: false
  }),
  methods: {
    async saveMaterial() {
      this.isSubmitted = true;
      await this.$validator.validate();
    }
  }
};
</script>
