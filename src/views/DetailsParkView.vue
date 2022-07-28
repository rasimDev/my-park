<template>
  <div>
    <CardDetails />
    <div id="container-map">
      <h6>Ubicación</h6>
      <MapComponent />
    </div>
  </div>
</template>

<script>
import CardDetails from '@/components/CardDetails.vue';
import AppFooter from '@/components/AppFooter.vue';
import MapComponent from '@/components/MapComponent.vue';
export default {
  components: {
    CardDetails,
    AppFooter,
    MapComponent
  },
};
</script>

<style>
#container-map{
  width: 100%;
  height: 300px;
}
</style>
