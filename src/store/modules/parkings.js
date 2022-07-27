import { DB } from '@/plugins/firebase'

export const parkingsModule = {
    namespaced: true,
    state: {
        list: [],
        loading: false
    },
    getters: {
        numberParkings(state) {
            return state.list.length
        }
    },
    mutations: {
        SET_LIST(state, newList) {
            state.list = newList
        },
        SET_LOADING(state, newLoading) {
            state.loading = newLoading
        }
    },
    actions: {
        // Obtener todos los estacionamientos
        async getAll({ commit }) {
            commit('SET_LOADING', true)
            try {
                const parkings$ = await DB.collection('parkings').get()
                const parkings = []

                parkings$.forEach((document) => {
                    parkings.push({ ...document.data(), id: document.id })
                })
                commit('SET_LIST', parkings)
            } catch (error) {
                console.error(error)
            } finally {
                commit('SET_LOADING', false)
            }
        },
        // Crear un estacionamiento
        async createOne({ commit }, newParking) {
            commit('SET_LOADING', true)
            try {
                await DB.collection('parkings').add(newParking)
            } catch (error) {
                console.error(error)
            } finally {
                commit('SET_LOADING', false)
            }
        },
    }
}
