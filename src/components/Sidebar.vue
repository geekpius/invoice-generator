<template>
  <v-navigation-drawer v-model="drawer" dark app class="purple darken-2">
    <v-layout column align-center>
      <v-flex class="mt-5">
        <v-avatar size="100">
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-avatar>
        <p class="white--text subheading mt-1 text-center">{{ user.name }}</p>
        <p class="white--text text-center">
          <small>{{ user.last_login }}</small>
        </p>
      </v-flex>
    </v-layout>

    <v-list flat>
      <v-list-item>
        <v-list-item-content class="text-center">
          <v-divider></v-divider>
          <v-list-item-title>Menu Navigation</v-list-item-title>
          <v-divider></v-divider>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        v-for="link in menuSingleLinks"
        :key="link.text"
        router
        :to="link.route"
        active-class="white active-font"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    menuSingleLinks: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        route: { name: "Dashboard" }
      },
      {
        icon: "mdi-receipt",
        text: "Material Description",
        route: { name: "Description" }
      },
      {
        icon: "mdi-file-cog",
        text: "Generate Invoice",
        route: { name: "Generate" }
      },
      {
        icon: "mdi-table-large",
        text: "List Invoices",
        route: { name: "ListMaterial" }
      }
    ]
  }),
  computed: {
    ...mapGetters({
      user: "auth/getCurrentUser"
    })
  }
};
</script>

<style scoped>
.active-font {
  color: purple !important;
}
</style>
