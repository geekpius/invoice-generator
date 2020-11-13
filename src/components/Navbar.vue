<template>
  <nav>
    <v-app-bar color="purple darken-2" dark app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="$route.meta.requiresAuth"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Invoice</span> &nbsp;
        <span>Generator</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
        v-if="!$route.meta.requiresAuth"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="indigo pl-5 pr-5" dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-login-variant</v-icon>
            Log In
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-title>Sign in with</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-title>
                <v-btn color="primary" block>
                  <v-icon left>
                    mdi-google
                  </v-icon>
                  Google
                </v-btn>
              </v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item>
              <v-list-item-title>
                <v-btn color="primary" block>
                  <v-icon left>
                    mdi-facebook
                  </v-icon>
                  Facebook
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

      <v-menu
        offset-y
        transition="scale-transition"
        v-if="$route.meta.requiresAuth"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon text v-on="on" class="mr-5">
            <v-badge :content="3" :value="3" color="green" overlap>
              <v-icon medium>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </v-menu>

      <v-menu
        offset-y
        transition="scale-transition"
        v-if="$route.meta.requiresAuth"
      >
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

    <Sidebar :drawer="drawer" v-if="$route.meta.requiresAuth" />
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
