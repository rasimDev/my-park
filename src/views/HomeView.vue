<template>
  <v-layout style="gap: 10px" wrap>
    <v-flex v-for="parking in parkings" :key="parking.id">
      <CardParking :value="parking"/>
    </v-flex>
  </v-layout>  
</template>
<script>

import CardParking from "@/components/CardParking.vue"

import { mapState, mapActions } from 'vuex'
export default {
    components: { 
      CardParking 
    },
    computed: {
      ...mapState('parkings', {
        parkings: (state) => state.list
      })
    },
    methods: {
      ...mapActions('parkings', {
        getAllParkings: 'getAll'
      })
    },
    mounted(){
      this.getAllParkings()
    }
}
</script>

<style>
</style>
