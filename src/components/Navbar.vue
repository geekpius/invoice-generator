<template>
  <nav>
    <v-app-bar color="purple darken-2" dark app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="isLoggedIn"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Invoice</span> &nbsp;
        <span>Generator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        color="indigo pl-5 pr-5"
        dark
        v-if="!isLoggedIn"
        @click="$router.push({ name: 'Signin' })"
      >
        <v-icon left>mdi-login-variant</v-icon>
        Log In
      </v-btn>

      <v-menu offset-y transition="scale-transition" v-if="isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn icon text v-on="on" class="mr-5">
            <v-badge :content="3" :value="3" color="green" overlap>
              <v-icon medium>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </v-menu>

      <v-menu offset-y transition="scale-transition" v-if="isLoggedIn">
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
            <v-list-item-action v-if="link.icon" class="mr-2">
              <v-icon size="20">{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout">
            <v-list-item-action class="mr-2">
              <v-icon size="20">mdi-logout-variant</v-icon>
            </v-list-item-action>
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <Sidebar :drawer="drawer" v-if="isLoggedIn" />
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
    menu: false,
    menus: [
      {
        text: "Your Profile",
        icon: "mdi-account-circle",
        route: { name: "Profile" }
      },
      { text: "Help", icon: "mdi-help-circle", route: "/help" },
      { text: "Settings", icon: "mdi-cog", route: "/settings" }
    ]
  }),
  methods: {
    logout() {
      this.$store.dispatch("auth/logoutUser").then(() => {
        this.$router.push({ name: "Signin" });
      });
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    }
  }
};
</script>

<style scoped>
.border {
  border-left: 4px solid red;
}
</style>
