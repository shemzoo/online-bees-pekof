import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    favourites: [],
  },
  getters: {
    productsData(state) {
      return state.products;
    },
    favouriteProducts(state) {
      return state.favourites;
    },
  },
  mutations: {
    setDataToState: (state, products) => {
      state.products = products;
    },
    setFavoriteProduct: (state, product) => {
      state.favourites.push(product);
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
    getFavouriteProduct({ commit }, { product }) {
      commit('setFavoriteProduct', product);
      return product;
    },
  },
});
