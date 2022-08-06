<template>
  <div>
    <v-list-item>
      <v-btn color="primary" outlined link to="/signin">
        <!-- <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon> -->
        <v-list-item-title class="font-weight-bold body-2"> Iniciar sesión </v-list-item-title>
      </v-btn>
    </v-list-item>
    <v-list-item>
      <v-btn color="primary" link to="/signup" style="width: 100%; text-align: center;">
        <!-- <v-list-item-icon>
                <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon> -->
        <v-list-item-title class="font-weight-bold body-2"> Registrar </v-list-item-title>
      </v-btn>
    </v-list-item>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
