<template>
  <v-card class="my-12 detalle">
    <template slot="progress">
      <v-progress-linear color="primary" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="250" :src="value.image"></v-img>

    <v-card-title>{{ value.title }}</v-card-title>

    <div class="resume-parking">
      <v-icon class="icon-resume">mdi-map-marker</v-icon>
      {{ value.address }}
    </div>

    <div class="resume-parking">
      <v-icon class="icon-resume">mdi-currency-usd</v-icon>
      {{ value.price }} x Día
    </div>

    <div class="resume-parking">
      <v-icon class="icon-resume">mdi-card-account-details</v-icon>
      <span>Propietario: </span>{{ value.owner }}
    </div>

    <!-- Inicio Reserva -->
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Fecha de reserva"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
          style="width: 300px; margin-left: 20px"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title scrollable>
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
      </v-date-picker>
    </v-menu>
    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex">
      <!-- <v-btn large class="primary px-5" @click="reservation"> Reserva </v-btn> -->
      <v-btn
        :disabled="dialog"
        :loading="dialog"
        class="white--text"
        color="blue darken-2"
        outlined
        @click="dialog = true"
      >
        Reservar
      </v-btn>
      <v-dialog v-model="dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Reservando estacionamiento
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- Falta validación de que solo aparezca la alerta cuando se hace click -->
      <div id="alerta"></div>
      <!--  -->
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  watch: {
    dialog(val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
  },
  props: ['value'],
  filters: {
    currency(value) {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      }).format(value)
    },
  },
  methods: {
    reservation() {
      alert('Estacionamiento reservado con éxito')
    },
  },
}
</script>

<style>
.detalle {
  width: 450px;
}

.resume-parking {
  width: 90%;
  display: flex;
  margin: 20px auto;
  font-weight: 100;
  color: #757575;
}

.resume-parking span {
  font-weight: 600;
  margin-right: 10px;
}

.icon-resume {
  margin-right: 15px;
}
</style>
