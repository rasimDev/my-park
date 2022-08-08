<template>
  <div>
    <div class="hero">
      <div class="img-hero">
        <!-- <img src="../assets/banner.png" alt="" /> -->
    
    <!-- carrusel -->
     <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
       height="300"
    ></v-carousel-item>
  </v-carousel>
  <!-- carrusel -->
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
   data () {
      return {
        items: [
          {
            src: 'https://i.postimg.cc/VkyDV1NP/banner1.png',
          },
          {
            src: 'https://i.postimg.cc/1XHWLpxb/banner2.png',
          },
          {
            src: 'https://i.postimg.cc/FKVJbGjt/banner3.png',
          },
          {
            src: 'https://i.postimg.cc/50ZYbGJC/banner4.png',
          },
          {
            src: 'https://i.postimg.cc/DZKS9jXZ/banner5.png',
          },
        ],
      }
    },
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
.v-image__image, .v-image__placeholder {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 230px;
}
.v-window__prev, .v-window__next {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    position: absolute;
    margin: 0 16px;
    top: calc(50% - 150px);
    z-index: 1;
}
</style>