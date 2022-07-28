<template>
  <div v-if="parking">
    <CardDetails :value="parking" />
    <div id="container-map">
      <h6>Ubicación</h6>
      <MapComponent :marker="parking.coords" />
    </div>
  </div>
</template>

<script>
import CardDetails from '@/components/CardDetails.vue'
import AppFooter from '@/components/AppFooter.vue'
import MapComponent from '@/components/MapComponent.vue'

import Store from '@/store'

import { mapState } from 'vuex'
export default {
  components: {
    CardDetails,
    AppFooter,
    MapComponent,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('parkings/getById', to.params.id)
    next()
  },
  computed: {
    ...mapState('parkings', {
      parking: (state) => state.details,
    }),
  },
}
</script>

<style>
#container-map {
  width: 100%;
  height: 300px;
}
</style>
