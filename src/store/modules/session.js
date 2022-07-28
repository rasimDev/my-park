import Router from '@/router';
import Firebase from 'firebase';

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  getters: {
    activeLogin(state) {
      return !!state.user;
    },
    userEmail(state) {
      return state.user ? state.user.email : '';
    },
  },
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async subscribeToAuthStateChange({ commit }) {
      Firebase.auth().onAuthStateChanged((user) => {
        commit('SET_USER', user);
        if (user) Router.push('/home');
      });
    },
    async signInWithEmailAndPassword({ commit }, credentials) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
      } catch (e) {
        console.error('Error al iniciar sesión', e);
        alert('Email o contraseña incorrectos');
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async createUserWithEmailAndPassword({ commit }, newUser) {
      commit('SET_LOADING', true);

      try {
        await Firebase.auth().createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        );
      } catch (error) {
        console.error(error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async signOut({ commit }) {
      commit('SET_LOADING', true);
      try {
        await Firebase.auth().signOut();
      } catch (e) {
        console.error('Error al iniciar sesión', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};
