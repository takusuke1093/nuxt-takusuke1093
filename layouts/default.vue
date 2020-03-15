<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-icon x-large class="blue--text text--lighten-2">mdi-school</v-icon>
    </v-app-bar>
    <nuxt />
    <v-footer :fixed="fixed" app>
      <span>&copy; KGBFKH</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "KGBFKH"
    };
  }
};
</script>
