<template>
  <div>
    <v-card class="mx-auto" max-width="400">
        <v-img 
            class="white--text align-end" 
            height="200px" 
            :src="value.image">
            <v-card-title>{{ value.name }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-0">{{ value.adress }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
        <div>{{ value.commune }}</div>
        <div>{{ value.rate }}</div>
        </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Compartir
      </v-btn>

       <v-btn
              small
              color="primary"
              dark
            >
              Reservar
            </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
    props: ['value']
}
</script>

<style>

</style>