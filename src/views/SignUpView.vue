<template>
    <v-layout justify-center style="height: 100%" align-center>
    <v-flex sm6>
      <v-card>
      <img class="img-register" src="../assets/car-register.svg" alt="" srcset="">
        <v-form @submit.prevent="handleSignUpFormSubmit" ref="signUpFormRef">
        <v-card-title class="justify-center">Registrate</v-card-title>
        <v-card-text>
          <v-text-field
            type="email"
            label="Email"
            outlined
            v-model="credentials.email"
            :rules="[required, mustBeEmail]"
          ></v-text-field>
          <v-text-field
            type="password"
            label="Contraseña"
            outlined
            v-model="credentials.password"
            :rules="[required, minLength(6)]"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block type="submit">
            Registrar
            <!-- <v-icon>mdi-send</v-icon> -->
          </v-btn>
        </v-card-actions>
      </v-form>
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
            password: ''
        }
    }),
    methods: {
        ...mapActions("session", ["createUserWithEmailAndPassword"]),
        async handleSignUpFormSubmit(){
            if(this.$refs.signUpFormRef.validate()){
                await this.createUserWithEmailAndPassword(this.credentials)
            }
        },
        required(value){
            return !!value || "Este campo es obligatorio"
        },
        mustBeEmail(value) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || "El campo debe ser un email"
        },
        minLength(length){
            return (value) => String(value).length >= length  || `El campo no tiene el minimo de ${length} carácteres`
        }
    }
}
</script>

<style>
.img-register{
  width: 100%;
}
</style>