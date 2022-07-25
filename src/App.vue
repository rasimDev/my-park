<template>
  <v-app>
    <v-app-bar app color="primary" dark @click="drawer = !drawer">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title> MyPark </v-app-bar-title>
      <v-spacer></v-spacer>

      <AppBarSession v-if="activeLogin" />
      <SignInBtn 
        v-if="!activeLogin"
        link to="/signin"/>
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
    >
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Principal</v-list-item-title>
        </v-list-item>

        <v-list-item link to="">
          <v-list-item-icon>
            <v-icon>mdi-car-clock</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Publicar</v-list-item-title>
        </v-list-item>
      </v-list>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Acerca de</v-list-item-title>
        </v-list-item>
      </v-list>
      <SignOutBtn v-if="activeLogin"/>
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
import AppBarSession from '@/components/AppBarSession'
import SignInBtn from './components/SignInBtn.vue'
import SignOutBtn from './components/SignOutBtn.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    AppBarSession,
    SignInBtn,
    SignOutBtn,
    Footer
},
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters('session', ['activeLogin']),
  },
  mounted() {
    this.$store.dispatch('session/subscribeToAuthStateChange');
  },
};
</script>

<style></style>
