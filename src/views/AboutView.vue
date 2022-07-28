<template>
  <div>
    <v-container>
      <v-img src="@/assets/estacionamiento1.jpg" alt="estacionamiento" />

      <h1 class="text-center my-10 primary--text">Quienes Somos</h1>

      <p>
        Somos un grupo de emprendedores una idea innovadora que queremos mostrar
        a ustedes y viene a solucionar un problema que se presenta a diario en
        las calles de Santiago.
      </p>

      <h2>Problematica</h2>
      <p>
        El alto congestionamiento de las calles impide encontrar
        estacionamientos con facilidad, por lo que es necesario poder reservar
        un estacionamiento con anticipación, ya sea en una calle permitida o
        algún establecimiento.
      </p>

      <h2>¿Cómo funciona?</h2>
      <p>
        Como <strong>*usuario*</strong> puedo encontrar diversos
        estacionamientos en la aplicación y elegir uno para poder reservar en un
        horario definido, con esto me aseguro que al salir de mi casa ya tendré
        un estacionamiento asegurado
      </p>

      <p>
        Como <strong>colaborador</strong> puedo registrar mi estacionamiento y
        arrendárselo a un usuario de MyPark.
      </p>

      <v-container class="my-10">
        <v-row>
          <div class="d-flex flex-column mx-5">
            <v-img
              class="d-flex flex-column mb-5"
              height="265"
              width="366"
              src="@/assets/file_20180406165255.jpg"
              alt="estacionamientos"
            ></v-img>
            <v-img
              height="265"
              width="366"
              src="@/assets/empty-parking-lot.jpg"
              alt="estacionamientos 2"
            ></v-img>
          </div>
          <v-img
            height="570"
            width="428"
            src="@/assets/businessman-with-smartphone-in-front-of-car.jpg"
            alt="negocio"
          ></v-img>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {
    
  },
};
</script>

<style>
p {
  font-size: 1.2rem;
}
</style>
