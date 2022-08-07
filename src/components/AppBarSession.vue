<template>
    <v-list-item>
        <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
            <!-- Mostrar nombre de usuario -->
            Alejandro González
        </v-list-item-title>
    </v-list-item>

</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState("session", ["user"]),
        userEmail() {
            return this.user.email
        },
    },
};
</script>

<style>
</style>