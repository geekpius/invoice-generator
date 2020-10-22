<template>
  <nav>
    <v-toolbar dark class="purple darken-2">
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Invoice </span>
        <span> Generator</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="primary">
        <span>Sign In</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>

      <!-- <v-btn color="red darken-2">
        <span>Sign Up</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn> -->
    </v-toolbar>

    <!-- <v-navigation-drawer v-model="drawer" class="indigo">
      <p>text</p>
    </v-navigation-drawer> -->
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      height="800"
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      mini: false
    };
  }
};
</script>
