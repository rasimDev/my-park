<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken =
  'pk.eyJ1IjoiY3Jpc3NsaWxpdGgiLCJhIjoiY2w1azF6cG0wMDV3bjNpcG5tdmZvc2p5NCJ9.0VZ-K72UuccwwmzRI7I1UA'
export default {
  data: () => ({
    map: null,
  }),
  props: {
    marker: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    marker: {
      handler() {
        this.processMarkerProp()
      },
    },
  },
  methods: {
    processMarkerProp() {
      if (this.map) {
        new mapboxgl.Marker().setLngLat(this.marker).addTo(this.map)
        this.map.flyTo({
          center: this.marker,
          zoom: 15,
        })
      }
    },
  },
  mounted() {
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
      projection: 'globe', // display the map as a 3D globe
    })
    this.map.on('style.load', () => {
      this.map.setFog({})
    })
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    })

    this.map.on('load', () => {
      this.processMarkerProp()
    })

    this.map.addControl(geocoder)

    geocoder.on('result', (e) => {
      // e.result.center
      this.$emit('pickPlace', e.result)
    })

    this.map.addControl(new mapboxgl.FullscreenControl())
    this.map.addControl(new mapboxgl.NavigationControl())
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    )
  },
}
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>
