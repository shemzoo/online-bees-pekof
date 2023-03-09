<template>
  <li @click="goToInfo(product.id)" @keydown="goToDetails()"
    class="catalog__item" v-for="product in data" :key="product.id">
    <img v-if="usedInFavorites"
     src="../assets/images/close.svg" class="catalog__item-icon" alt="icon"
     @click.stop="removeFromFavourites(product)" @keydown="bar">
    <img v-else-if="!inFavouritesCheck(product.id)" src="../assets/images/wishlist-icon.svg"
     class="catalog__item-icon" alt="icon"
     @click.stop="addToFavourites(product.id)" @keydown="bar">
    <img v-else-if="inFavouritesCheck(product.id)" src="../assets/images/wishlist-icon--fill.svg"
     class="catalog__item-icon" alt="icon"
     @click.stop="removeFromFavourites(product)" @keydown="bar">
    <img
     class="catalog__item-image" :src="product.image" alt="product">
    <h3 class="catalog__item-title">{{ product.title }}</h3>
    <p class="catalog__item-price">{{ product.price }} руб.</p>
  </li>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'AppCatalogCard',
  props: ['data', 'usedInFavorites'],
  computed: {
    ...mapGetters([
      'favouriteProducts',
    ]),
  },
  methods: {
    goToInfo(productId) {
      this.$router.push({ name: 'info', params: { id: productId } });
    },
    addToFavourites(id) {
      this.$store.dispatch('getFavouriteProduct', {
        product: this.data[id - 1],
      });
    },
    removeFromFavourites(product) {
      const id = this.favouriteProducts.indexOf(product);
      this.$store.state.favourites.splice(id, 1);
    },
    inFavouritesCheck(id) {
      return this.favouriteProducts.find((item) => item.id === id);
    },
  },
};
</script>

<style>

</style>
