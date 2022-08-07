<template>
  <div class="mx-auto">
    <v-card class="mx-auto card-parking" link :to="`/details/${value.id}`">
      <v-img class="white--text align-end" height="200px" :src="value.image">
        <v-card-title class="title-text font-weight-bold">{{ value.title }}</v-card-title>
      </v-img>
      <div class="resume-parking">
        <v-icon class="icon-resume">mdi-map-marker</v-icon>
        {{ value.address }}
      </div>

      <div class="resume-parking">
        <v-icon class="icon-resume">mdi-currency-usd</v-icon>
        {{ value.price }} diario
      </div>
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

.card-parking {
  width: 300px;
  padding-bottom: 5px;
}

.resume-parking {
  width: 90%;
  display: flex;
  margin: 20px auto;
  font-weight: 100;
  color: #757575;
}

.icon-resume{
  margin-right: 15px;
}
</style>
