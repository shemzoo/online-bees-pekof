// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    wishlist: [],
  },
  getters: {
    productsData(state) {
      return state.products;
    },
  },
  mutations: {
    setDataToState: (state, products) => {
      state.products = products;
    },
  },
  actions: {
    getData({ commit }) {
      return axios('https://fakestoreapi.com/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('setDataToState', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {
  },
});
