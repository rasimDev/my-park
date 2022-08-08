<template>
  <v-card>
    <v-form @submit.prevent="handleFormSubmit" ref="form">
      <v-card-title class="justify-left font-weight-bold">Publica tu estacionamiento</v-card-title>
      <v-card-text>
        <v-text-field
          label="Nombre del estacionamiento"
          prepend-icon="mdi-card-text"
          :rules="[required]"
          v-model="parking.title"
          :disabled="loading"
        ></v-text-field>
        <!-- <v-text-field
          label="URL de la Imagen del estacionamiento"
          v-model="parking.image"
          :rules="[required]"
          :disabled="loading"
        >
        </v-text-field> -->
        <v-file-input
          label="Carga una foto"
          prepend-icon="mdi-camera"
          v-model="parking.image"
          :rules="[required]"
        >
        </v-file-input>
        <!-- <v-select
          :items="rates"
          label="Periodo"
          v-model="parking.rate"
          :disabled="loading"
        ></v-select>
        <v-text-field
          label="Cantidad"
          v-model.number="parking.spawn"
          :rules="[required]"
          :disabled="loading"
        ></v-text-field> -->
        <v-text-field
          label="Precio diario"
          prepend-icon="mdi-currency-usd"
          v-model.number="parking.price"
          :rules="[required]"
          :disabled="loading"
        ></v-text-field>
        <v-card-text class="text-ubicacion">
          Selecciona la ubicación en el mapa
          <div id="map-container">
            <MapComponent @pickPlace="handlePlacePicked" :disabled="loading" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" large outlined :loading="loading">Publicar</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MapComponent from '@/components/MapComponent.vue'

export default {
  components: {
    MapComponent,
  },
  data: () => ({
    loading: false,
    map: null,
    dialog: false,
    parking: {
      title: '',
      image: '',
      address: '',
      rate: '',
      spawn: 0,
      price: 0,
      status: 'available',
      coords: null,
    },
    rates: [
      { text: 'Hora', value: 'hourly' },
      { text: 'Dia', value: 'daily' },
      { text: 'Semana', value: 'weekly' },
      { text: 'Mes', value: 'monthly' },
      { text: 'Anual', value: 'annual' },
    ],
  }),
  computed: {
    ...mapGetters('session', ['userEmail']),
  },
  methods: {
    ...mapActions('parkings', {
      createParking: 'createOne',
      getAllParkings: 'getAll',
    }),
    required(value) {
      return !!value || 'Este campo es obligatorio'
    },
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true
          await this.createParking({ ...this.parking, owner: this.userEmail })
          this.dialog = false
          await this.getAllParkings()
          this.$router.replace('/home')
        } catch (e) {
          console.error(e)
        } finally {
          this.loading = false
        }
      }
    },
    handlePlacePicked(result) {
      this.parking.coords = result.center
      this.parking.address = result.place_name
    },
  },
}
</script>

<style>

.text-ubicacion {
  font-size: 18px;
  color: #757575;
  margin-bottom: 10px;
}

#map-container {
  margin: 0;
  width: 100%;
  margin-top: 20px;
}
</style>
