<template>
  <div id="map"></div>
</template>

<script>

import mapboxgl, { FullscreenControl } from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc3NsaWxpdGgiLCJhIjoiY2w1azF6cG0wMDV3bjNpcG5tdmZvc2p5NCJ9.0VZ-K72UuccwwmzRI7I1UA'
export default {
  data: () => ({
    map: null
  }),
  mounted() {
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: 'globe' // display the map as a 3D globe
    })

    this.map.on('style.load', () => {
      this.map.setFog({})
    })

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    })
    
    this.map.addControl(geocoder)

    // geocoder.on('result', (e) => {
    //   // this.geocoderLastResult = e.result
    //   e.result.center
    // })

    this.map.addControl(
      new mapboxgl.FullscreenControl()
    )

    this.map.addControl(
      new mapboxgl.NavigationControl()
    )

    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    )
    // setTimeout(() => {
    //   this.$store.commit('events/ADD_TO_LIST', [12.66148, 55.708167])
    // }, 10000)

    // mapboxClient.geocoding
    //   .forwardGeocode({
    //     query: 'Wellington, New Zealand',
    //     autocomplete: false,
    //     limit: 1
    //   })
    //   .send()
    //   .then((response) => {
    //     if (
    //       !response ||
    //       !response.body ||
    //       !response.body.features ||
    //       !response.body.features.length
    //     ) {
    //       console.error('Invalid response:');
    //       console.error(response);
    //       return;
    //     }
    //     const feature = response.body.features[0];

    //     // Create a marker and add it to the map.
    //     new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
    //   });
  },
}
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>