<template>
  <div v-if="parking" class="contenedor-detalles">
    <CardDetails :value="parking" />
    <div id="container-map">
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
.contenedor-detalles {
  display: flex;
  flex-flow: row wrap;
  gap:10px;
  margin: 0 auto;
  width: 100%;
}

#container-map {
  width: 500px;
  height: 485px;
  margin-top: 50px;
}
</style>
