<template>
  <v-dialog v-if="activeLogin" v-model="dialog" width="500px">
    <template #activator="{ on }">
      <v-btn color="info" v-on="on">Publicar estacionamiento</v-btn>
    </template>
    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title class="justify-center">Publica tu estacionamiento</v-card-title>
        <div id="map-container">
          <MapComponent />
        </div>
        <v-card-text>
          <v-text-field label="Nombre del estacionamiento" prepend-icon="mdi-card-text" :rules="[required]"
            v-model="parking.name"></v-text-field>
          <!-- <v-text-field label="URL de la Imagen del estacionamiento" v-model="parking.image" :rules="[required]">
          </v-text-field> -->
          <v-file-input label="Foto" prepend-icon="mdi-camera" v-model="parking.image" :rules="[required]">
          </v-file-input>
          <v-text-field label="Tarifa diaria" prepend-icon="mdi-currency-usd" v-model.number="parking.rate"
            :rules="[required]"></v-text-field>
          <v-card-actions>
            <v-btn type="submit" large outlined>Publicar</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from "vuex";
import {mapState } from "vuex"
import MapComponent from './MapComponent.vue';
export default {
  data: () => ({
    map: null,
    // markers: [],
    // parkingPlaces: [],
    // geocoderLastResult: null,
    dialog: false,
    parking: {
      name: "",
      image: "",
      adress: null,
      commune: null,
      rate: null,
      status: "available",
      owner: "Test@gmail.com"
    },
  }),
  components: {
    MapComponent,
  },
  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("session", ["user"]),
    userEmail() {
      return this.user.email
    }
  },
  methods: {
    ...mapActions("parkings", {
      createParking: "createOne",
      getAllParkings: "getAll",
    }),
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        await this.createParking({ ...this.parking });
        this.dialog = false;
        await this.getAllParkings();
      }
    },
  },
};
</script>

<style>
#map-container {
  margin: 0 auto;
  width: 90%;
  height: 250px;
}
</style>