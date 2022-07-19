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
        src="https://www.ebankingnews.com/wp-content/uploads/2018/03/Estacionamiento.jpg"
      ></v-img>

      <v-card-title>Estacionamiento Miguel Claro, Providencia</v-card-title>
        <div>
          <ul>
            <li>Ubicación: Calle Miguel Claro 1410, Providencia.</li>
            <li>Horario: Lunes a Viernes de 8:00 a 20:00 hrs.</li>
            <li>Tarifa: $1.000.00 por hora.</li>
            <li>Propietario: Alejandro Gonzalez</li>
            <li>Contacto: +569 45302015</li>
          </ul>
        </div>
      </v-card-text>

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
export default {};
</script>

<style></style>
