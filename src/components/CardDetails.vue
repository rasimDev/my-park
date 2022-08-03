<template>
    <v-card class="my-12 detalle">
      <template slot="progress">
        <v-progress-linear
          color="primary"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        :src="value.image"
      ></v-img>

      <v-card-title>{{ value.title }}</v-card-title>
        <div>
          <ul>
            <li>Ubicación: {{ value.address }}</li>
            <li>Horario: {{ value.rate }} - {{ value.spawn }}</li>
            <li>Tarifa: {{ value.price | currency }}</li>
            <li>Propietario: {{ value.owner }}</li>
            <li>Contacto: {{ value.owner }}</li>
          </ul>
        </div>

      <v-divider class="mx-4"></v-divider>

      <!-- <v-card-text class="d-flex justify-center">
        <v-chip-group 
          active-class="primary accent-4 white--text"
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>

          <v-chip>10:00PM</v-chip>
        </v-chip-group>
      </v-card-text> -->

      <v-card-actions class="d-flex justify-center">
        <v-btn class="primary px-5" @click="Reserve">
          Reserva
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: ["value"],
  filters: {
    currency(value) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      }).format(value)
    },
  }

};
</script>

<style>
.detalle {
  width: 450px;
}
</style>
