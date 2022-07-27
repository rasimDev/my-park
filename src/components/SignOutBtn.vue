<template>
  <v-list-item>
        <v-btn color="error" @click="signOut">
            <v-list-item-title>
                Cerrar sesión
            </v-list-item-title>
        </v-btn>
    </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions("session", ["signOut"])
  }
}
</script>

<style>
</style>