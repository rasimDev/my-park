<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="value.image">
        <v-card-title class="title-text">{{ value.title }}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">{{ value.address }} </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{ value.rate | rate }}</div>
        <div>{{ value.spawn }}</div>
      </v-card-text>

      <v-card-actions>
        <!-- <v-btn
        color="orange"
        text
      >
        Compartir
      </v-btn> -->

        <v-btn small color="primary" dark link :to="`/details/${value.id}`"> Reservar </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['value'],
  filters: {
    rate(value) {
      let result

      switch (value) {
        case 'daily':
          result = 'Diario'
          break
        case 'weekly':
          result = 'Semanal'
          break
        case 'monthly':
          result = 'Mensual'
          break
        case 'annualy':
          result = 'Anual'
          break
      }

      return result
    },
  },
}
</script>

<style>
.title-text {
  background-color: #00000061;
}
</style>
