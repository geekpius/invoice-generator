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
      <template v-slot:top>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >{{ recordName }} <br />
              {{ dialogDeleteText }}</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >CANCEL</v-btn
              >
              <v-btn color="error darken-1" text @click="deleteItemConfirm"
                >YES, DELETE</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2 primary--text">
          mdi-pencil
        </v-icon>
        <v-icon small class="error--text" @click="deleteDescription(item)">
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
      dialogDelete: false,
      dialogDeleteText: null,
      recordName: null,
      search: "",
      rowId: -1,
      headers: [
        { text: "PROFILE", align: "start", value: "profile" },
        { text: "DESCRIPTION", value: "description" },
        { text: "UNIT PRICE", value: "unit_price", align: "right" },
        { text: "ACTIONS", value: "actions", sortable: false, align: "center" }
      ]
    };
  },
  methods: {
    deleteDescription(item) {
      this.rowId = item.id;
      this.recordName = `${item.profile} - ${item.description}`;
      this.dialogDeleteText = `Sure to delete this record?`;
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.$store.dispatch("materials/deleteMaterialDescription", {
        id: this.rowId
      });
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
    }
  },
  computed: {
    getDescriptionList() {
      return this.descriptionList;
    }
  },
  watch: {
    // dialog(val) {
    //   val || this.close();
    // },
    dialogDelete(val) {
      val || this.closeDelete();
    }
  }
};
</script>
