<template>
  <nav>
    <v-app-bar color="purple darken-2" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Invoice</span> &nbsp;
        <span>Generator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon text v-on="on" class="mr-5">
            <v-badge :content="3" :value="3" color="green" overlap>
              <v-icon medium>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </v-menu>

      <v-menu offset-y transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="pl-5 pr-5">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Geek</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            v-for="link in menus"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-tile-action v-if="link.icon" class="mr-2">
              <v-icon size="20">{{ link.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <Sidebar :drawer="drawer" />
  </nav>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "Navbar",
  components: {
    Sidebar
  },
  data: () => ({
    drawer: true,
    menuGroupLinks: [
      {
        icon: "mdi-account-supervisor",
        title: "Accounts",
        active: false,
        menuGroupLinks: [
          { title: "Users", route: { name: "User" } },
          { title: "Roles", route: { name: "User" } }
        ]
      },
      {
        icon: "mdi-tag-multiple",
        title: "Inventories",
        route: { name: "Inventory" },
        menuGroupLinks: [{ title: "Users" }, { title: "Roles" }]
      },
      {
        icon: "mdi-account-supervisor-circle",
        title: "Suppliers",
        route: { name: "Supplier" },
        menuGroupLinks: [{ title: "Users" }, { title: "Roles" }]
      },
      {
        icon: "mdi-sale",
        title: "Sales",
        route: { name: "Sale" },
        menuGroupLinks: [{ title: "Users" }, { title: "Roles" }]
      },
      {
        icon: "mdi-handshake-outline",
        title: "Transactions",
        route: { name: "Transaction" },
        menuGroupLinks: [{ title: "Users" }, { title: "Roles" }]
      }
    ],
    menuSingleLinks: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        route: { name: "Dashboard" }
      },
      {
        icon: "mdi-cog",
        text: "Settings",
        route: { name: "Setting" }
      }
    ],
    menus: [
      { text: "Your Profile", icon: "mdi-account-circle", route: "/profile" },
      { text: "Help", icon: "mdi-help-circle", route: "/help" },
      { text: "Settings", icon: "mdi-cog", route: "/settings" },
      { text: "Sign Out", icon: "mdi-logout-variant", route: "/signout" }
    ]
  })
};
</script>

<style scoped>
.border {
  border-left: 4px solid red;
}
</style>
