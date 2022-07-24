import Vue from 'vue';
import Vuex from 'vuex';

import { sessionModule as session } from '@/store/modules/session.js';
import { parkingsModule as parkings } from '@/store/modules/parkings.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    parkings
  },
});