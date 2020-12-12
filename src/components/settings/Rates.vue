<template>
  <div>
    <div class="pt-4">
      <v-card elevation="2">
        <v-card-title>Percentage Rate</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <RateForm
                :form-values="percentage"
                @updatePercentage="updatePercentage"
                :is-success="isSuccess"
                :response-msg="responseMsg"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import RateForm from "@/components/settings/RateForm.vue";
import { mapGetters } from "vuex";
export default {
  name: "Rates",
  components: {
    RateForm
  },
  data() {
    return {
      isSuccess: false,
      responseMsg: ""
    };
  },
  methods: {
    async getPercentage() {
      this.$store.dispatch("settings/fetchPercentage");
    },
    async updatePercentage(formData) {
      try {
        await this.$store.dispatch("settings/updatePercentage", formData);
        this.isSuccess = true;
        this.responseMsg = "Percentage updated successful";
      } catch (error) {
        this.isSuccess = false;
        this.responseMsg = "Percentage update failed";
      }
    }
  },
  created() {
    this.getPercentage();
  },
  computed: {
    ...mapGetters({
      percentage: "settings/getPercentage"
    })
  }
};
</script>
