<template>
  <v-navigation-drawer v-model="drawer" dark app class="purple darken-2">
    <v-layout column align-center>
      <v-flex class="mt-5">
        <v-avatar size="100">
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-avatar>
        <p class="white--text subheading mt-1 text-center">geek</p>
        <p class="white--text text-center">
          <small>Logged in at 3:05pm</small>
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

      <v-list-group
        v-for="item in menuGroupLinks"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
        active-class="white--text"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.menuGroupLinks"
          :key="child.title"
          router
          :to="child.route"
          active-class="border white--text"
        >
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
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
      }
    ],
    menuSingleLinks: [
      {
        icon: "mdi-view-dashboard",
        text: "Dashboard",
        route: { name: "Dashboard" }
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
.active-font {
  color: purple !important;
}
</style>
