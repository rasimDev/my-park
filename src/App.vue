<template>
  <v-app>
    <v-app-bar app @click="drawer = !drawer" height="80">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <!-- <v-app-bar-title> MyPark </v-app-bar-title> -->
      <v-spacer></v-spacer>
      <v-img class="mx-auto" src="../src/assets/mypark-logo.jpeg" max-height="90" max-width="90" contain></v-img>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer app clipped v-model="drawer" width="auto">
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Reservar</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Acerca de</v-list-item-title>
        </v-list-item>
        <AppBarSession v-if="activeLogin"/>
      </v-list>

      <SignOutBtn v-if="activeLogin" />
      <SignInBtn v-if="!activeLogin" link to="/signin" />
    </v-navigation-drawer>

    <v-main>
      <v-container style="height: 100%">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapState } from "vuex";
import SignInBtn from './components/SignInBtn.vue'
import SignOutBtn from './components/SignOutBtn.vue'
import Footer from './components/Footer.vue'
import AppBarSession from './components/AppBarSession.vue'

export default {
  components: {
    SignInBtn,
    SignOutBtn,
    Footer,
    AppBarSession,
},
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters('session', ['activeLogin']),
    ...mapState("session", ["user"]),
    userEmail() {
      return this.user.email;
    }
  },
  mounted() {
    this.$store.dispatch('session/subscribeToAuthStateChange');
  },
};
</script>

<style>
</style>
