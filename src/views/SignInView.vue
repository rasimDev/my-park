<template>
  <v-layout justify-center style="height: 100%" align-center>
    <v-flex sm6>
      <v-card>
        <img class="mx-auto img-login" width="290" src="../assets/car-register.svg" alt="" srcset="">
        <v-form @submit.prevent="handleSignInFormSubmit" ref="signInFormRef">
          <v-card-title 
            class="justify-center"> 
            Inicia sesión
          </v-card-title>
          <v-card-text>
            <v-text-field type="email" label="Correo electrónico" outlined v-model="credentials.email"
              :rules="[required, mustBeEmail]"></v-text-field>
            <v-text-field type="password" label="Contraseña" outlined v-model="credentials.password"
              :rules="[required, minLength(6)]"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block large type="submit">
              Iniciar sesión
              <v-icon class="ml-4">mdi-login</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-card-actions>
          <v-btn @click="$router.push('/signup')" class="mt-5" outlined block color="primary">
            ¿No tienes una cuenta? Regístrate
          </v-btn>
        </v-card-actions>
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
.img-login {
  width: 100%;
}
</style>