<template>
  <v-layout justify-center style="height: 100%" align-center>
    <v-flex sm6>
      <v-card class="card-login d-flex flex-column">
      <img class="mx-auto" width="290" src="../assets/car-register.svg" alt="" srcset="">
        <v-form @submit.prevent="handleSignInFormSubmit" ref="signInFormRef">
          <v-card-title> Inicia sesión con tus credenciales </v-card-title>
          <v-card-text>
            <v-text-field type="email" label="Correo electrónico" outlined v-model="credentials.email"
              :rules="[required, mustBeEmail]"></v-text-field>
            <v-text-field type="password" label="Contraseña" outlined v-model="credentials.password"
              :rules="[required, minLength(6)]"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block outlined large type="submit">
              Iniciar sesión
              <v-icon
                class="ml-4">mdi-arrow-right-thin-circle-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-alert dense outlined type="error" class="mt-5" @click="$router.push('/signup')">
          ¿No tienes una cuenta? Regístrate, es gratis
        </v-alert>
      </v-card>
    </v-flex>

  </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    credentials: {
      email: '',
      password: '',
    },
  }),
  methods: {
    ...mapActions('session', ['signInWithEmailAndPassword', 'signInWithRedirect']),
    async handleSignInFormSubmit() {
      if (this.$refs.signInFormRef.validate()) {
        try {
          await this.signInWithEmailAndPassword(this.credentials);
          this.credentials = {
            email: '',
            password: '',
          };
        } catch (e) {
          console.error(e);
        }
      }
    },
    required(value) {
      return !!value || 'Este campo es obligatorio';
    },
    mustBeEmail(value) {
      return (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        'El campo debe ser un email'
      );
    },
    minLength(length) {
      return (value) =>
        String(value).length >= length ||
        `El campo no tiene el minimo de ${length} carácteres`;
    },
  },
};
</script>

<style>
.card-login{
  border: none;
}
</style>