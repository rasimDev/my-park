<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="mb-5">
          <h1>Tenemos estos estacionamientos para ti</h1>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col v-for="parking in parkings" :key="parking.id" cols="12" sm="4">
          <v-layout>
            <v-flex>
              <CardParking :value="parking" class="card-parking" />
            </v-flex>
          </v-layout>
        </v-col>
        <!-- <v-col>
          <v-layout id="mapContainer">
            <MapComponent />
          </v-layout>
        </v-col>-->
      </v-row>
    </v-container>
  </div>
</template>
<script>

import CardParking from "@/components/CardParking.vue"
import MapComponent from "@/components/MapComponent.vue"
import AddParkingBtn from "@/components/AddParkingBtn.vue"
import AppFooter from "@/components/AppFooter.vue"
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    CardParking,
    MapComponent,
    AddParkingBtn,
    AppFooter
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
  mounted() {
    this.getAllParkings()
  }
}
</script>

<style>
#mapContainer {
  width: 100%;
  height: 100%;
}

.card-parking {
  width: 90%;
  margin-bottom: 20px;
}
</style>
