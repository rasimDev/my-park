<template>
    <v-card class="mx-auto my-12" max-width="450" max-height="" >
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

      <v-card-title>{{ value.name }}</v-card-title>
        <div>
          <ul>
            <li>{{ value.adress}}</li>
            <li>Tarifa: ${{ value.price }} por hora.</li>
            <li>Propietario: {{ value.owner}}</li>
            <li>Contacto: +569 45302015</li>
          </ul>
        </div>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="d-flex justify-center">
        <v-chip-group 
          active-class="primary accent-4 white--text"
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>

          <v-chip>10:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions class="d-flex justify-center">
        <v-btn class="primary px-5" @click="Reserve">
          Reserva
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'parkingDetails',
  props: ['id'],
  computed: {
    ...mapGetters('parkings', ['getParkingById']),
    parking() {
      const { id } = this
      return this.getParkingById(id)
    }
  }
};
</script>

<style></style>
