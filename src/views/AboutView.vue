<template>
  <div>
    <v-container>
      <v-img src="@/assets/estacionamiento1.jpg" alt="estacionamiento" />

      <h1 class="my-10" style="color: #494949;">Quienes Somos</h1>

      <div class="about">
        <div class="about-text">
          <p>
            Somos un grupo de emprendedores una idea innovadora que queremos mostrar a ustedes y
            viene a solucionar un problema que se presenta a diario en las calles de Santiago.
          </p>

          <h2>Problematica</h2>
          <p>
            El alto congestionamiento de las calles impide encontrar estacionamientos con facilidad,
            por lo que es necesario poder reservar un estacionamiento con anticipación, ya sea en
            una calle permitida o algún establecimiento.
          </p>

          <h2>¿Cómo funciona?</h2>
          <p>
            Como <strong>*usuario*</strong> puedo encontrar diversos estacionamientos en la
            aplicación y elegir uno para poder reservar en un horario definido, con esto me aseguro
            que al salir de mi casa ya tendré un estacionamiento asegurado
          </p>

          <p>
            Como <strong>colaborador</strong> puedo registrar mi estacionamiento y arrendárselo a un
            usuario de MyPark.
          </p>
        </div>
        <div class="about-img">
          <img src="@/assets/file_20180406165255.jpg" alt="estacionamiento">
          <img
            src="@/assets/empty-parking-lot.jpg"
            alt="estacionamientos 2">
        </div>
      </div>

      <!-- <v-container class="my-10">
        <v-row>
          
          <v-img
            height="570"
            width="428"
            src="@/assets/businessman-with-smartphone-in-front-of-car.jpg"
            alt="negocio"
          ></v-img>
        </v-row>
      </v-container> -->
    </v-container>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer,
  },
}
</script>

<style>
p {
  font-size: 1.2rem;
}

.about {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.about-text {
  width: 500px;
}

.about-text p {
  font-size: 16px;
  color: #494949;
}

.about-img {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  height:280px;
}
element.style {
    padding-bottom: 0px;
}
</style>
