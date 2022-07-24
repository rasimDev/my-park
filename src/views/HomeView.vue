<template>
  <v-container>
    <v-row>
      <v-col>
      <v-layout id="mapContainer">
        <MapComponent/>
      </v-layout>
        
      </v-col>
      <v-col>
        <v-layout style="gap: 10px" wrap>
          <v-flex v-for="parking in parkings" :key="parking.id">
            <CardParking :value="parking"/>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import CardParking from "@/components/CardParking.vue"
import MapComponent from "@/components/MapComponent.vue"

import { mapState, mapActions } from 'vuex'
export default {
    components: {
    CardParking,
    MapComponent
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
#mapContainer{
  width: 100%;
  height: 100%;
}
</style>
