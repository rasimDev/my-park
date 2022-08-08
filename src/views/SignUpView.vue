<template>
  <v-layout justify-center style="height: 100%" align-center>
    <v-flex sm6>
      <v-card class="card-signin">
        <img class="img-register" src="../assets/hero-section.svg" alt="" srcset="" />
        <v-form @submit.prevent="handleSignUpFormSubmit" ref="signUpFormRef">
          <v-card-title class="justify-center">Crea una cuenta, es gratis</v-card-title>
          <v-card-text>
            <v-file-input
              label="Foto"
              prepend-icon="mdi-camera"
            >
            </v-file-input>
            <v-text-field class="input-form" type="text" label="Nombre" outlined></v-text-field>
            <v-text-field
              class="input-form"
              type="email"
              label="Email"
              outlined
              v-model="credentials.email"
              :rules="[required, mustBeEmail]"
            ></v-text-field>
            <v-text-field
              class="input-form"
              type="password"
              label="Contraseña"
              outlined
              v-model="credentials.password"
              :rules="[required, minLength(6)]"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn class="font-weight-bold" color="primary" block type="submit">
              Registrar
              <v-icon class="ml-4">mdi-login-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
        <v-card-actions>
          <v-btn @click="$router.push('/signin')" class="mt-5 font-weight-bold" outlined block color="primary">
            ¿Ya tienes una cuenta? Inicia sesión
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    credentials: {
      email: '',
      password: '',
    },
  }),
  methods: {
    ...mapActions('session', ['createUserWithEmailAndPassword']),
    async handleSignUpFormSubmit() {
      if (this.$refs.signUpFormRef.validate()) {
        await this.createUserWithEmailAndPassword(this.credentials)
      }
    },
    required(value) {
      return !!value || 'Este campo es obligatorio'
    },
    mustBeEmail(value) {
      return (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'El campo debe ser un email'
      )
    },
    minLength(length) {
      return (value) =>
        String(value).length >= length || `El campo no tiene el minimo de ${length} carácteres`
    },
  },
}
</script>

<style>
.card-signin {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-register {
  width: 300px;
  justify-self: center;
}

.input-form {
  width: 350px;
}
</style>
