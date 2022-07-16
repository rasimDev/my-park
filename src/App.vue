<template>
  <v-app>
    <Navbar />
    <Drawer />
    <Snackbar />
    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";


import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Footer,
  },
  data: () => ({}),
  mounted() {
    this.auth_State_Change();
  },
  methods: {
    ...mapActions(["auth_State_Change"]),
  },
};
</script>
