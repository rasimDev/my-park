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
        <v-btn text color="primary" @click="menu = false"> Cancelar </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
      </v-date-picker>
    </v-menu>
    <v-divider class="mx-4"></v-divider>

    <v-card-actions class="d-flex">
      <!-- <v-btn large class="primary px-5" @click="reservation"> Reserva </v-btn> -->
      <v-btn
      :color="colorBtn"
      dark
      @click="dialog = true"
    >
      {{ textBtn }}
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ titleDialog }}
        </v-card-title>

        <v-card-text>
          {{ textDialog }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            {{ disagree }}
          </v-btn>

          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            {{ agree }}
          </v-btn>
        </v-card-actions>
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
    textBtn: 'Reservar',
    colorBtn: 'blue darken-2',
    titleDialog: 'Confirma tu reserva',
    textDialog: 'Puedes cancelar tu reserva en cualquier momento',
    agree:'Confirmar',
    disagree: 'Cancelar',
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
  watch: {
    dialog(val) {
      if (!val) 
        return (
          this.textBtn = 'Cancelar reserva',
          this.colorBtn = 'red darken-2')
      setTimeout(() => (this.dialog = false), 10000)
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
