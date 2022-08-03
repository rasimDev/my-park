<template>
  <v-carousel v-model="model" class="carousel-parking">
    <v-carousel-item
      v-for="item in items"
      :key="item"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-sheet height="200" tile>
        <v-img class="white--text align-end" :src="item.src">
          <v-card-title class="title-text">{{ item.title }}</v-card-title>
        </v-img>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    items: [
      {
        title: 'Villa Alemana',
        src: 'https://i.ibb.co/YZMbyTM/Captura-de-pantalla-2022-07-27-a-la-s-20-49-32.png',
      },
      {
        title: 'Estacionamiento fuera de Santiago',
        src: 'http://photos.wikimapia.org/p/00/01/29/43/47_big.jpg',
      },
    ],
  }),
}
</script>

<style></style>
