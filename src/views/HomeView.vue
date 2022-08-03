<template>
  <div>
    <div class="hero">
      <div class="img-hero">
        <img src="../assets/banner.png" alt="" />
      </div>
      
    </div>
    <v-container>
      <div class="cards">
        <CardParking
          v-for="parking in parkings"
          :key="parking.id"
          :value="parking"
          class="card-parking"
        />
      </div>
    </v-container>
  </div>
</template>
<script>
import CardParking from '@/components/CardParking.vue'
import MapComponent from '@/components/MapComponent.vue'
import AddParkingBtn from '@/components/AddParkingBtn.vue'
import AppFooter from '@/components/AppFooter.vue'

import { mapState, mapActions } from 'vuex'
export default {
  components: {
    CardParking,
    MapComponent,
    AddParkingBtn,
    AppFooter,
  },
  computed: {
    ...mapState('parkings', {
      parkings: (state) => state.list,
    }),
  },
  methods: {
    ...mapActions('parkings', {
      getAllParkings: 'getAll',
    }),
  },
  mounted() {
    this.getAllParkings()
  },
}
</script>

<style>
.hero {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
}

.hero-title{
  font-weight: bold;
  font-size: 18px;
}
.hero-description{
  font-size: 16px;
}

.img-hero {
  width: 100%;
  height: 250px;
}

.img-hero img {
  width: 100%;
  height: 100%;
}

.text-hero p{
 width: 400px;
}

.cards {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin: 0 auto;
  width: 85%;
}
.card-parking {
  margin-bottom: 20px;
}
</style>
