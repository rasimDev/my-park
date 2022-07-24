<template>
  <v-dialog v-model="dialog" width="500px">
    <template #activator="{ on }">
      <v-btn color="info" v-on="on">Publicar estacionamiento</v-btn>
    </template>
    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title>Publicando estacionamiento</v-card-title>
        <v-card-text>
          <v-text-field
            label="Nombre"
            :rules="[required]"
            v-model="parking.name"
          ></v-text-field>
          <v-text-field
            label="URL de la Imagen del estacionamiento"
            v-model="parking.image"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Dirección"
            v-model.number="parking.adress"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Comuna"
            v-model.number="parking.commune"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Tarifa diaria"
            v-model.number="parking.rate"
            :rules="[required]"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" color="green">Publicar</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    dialog: false,
    parking: {
      name: '',
      image: '',
      adress: null,
      commune: null,
      rate: null,
      status: 'available',
      owner: 'maildelusuario@mail.com'
    },
  }),
  methods: {
    ...mapActions('parkings', {
      createParking: 'createOne',
      getAllParkings: 'getAll',
    }),
    required(value) {
      return !!value || 'Este campo es obligatorio';
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

<style></style>