<template>
  <li
    class="catalog__item"
    v-for="product in data" :key="product.id">
    <img v-if="usedInFavorites"
     src="../assets/images/close.svg" class="catalog__item-icon" alt="icon"
     @click="removeFromFavourites(product)" @keydown="bar">
    <img v-else src="../assets/images/wishlist-icon.svg" class="catalog__item-icon" alt="icon">
    <img @click="goToInfo(product.id)" @keydown="goToDetails()"
     class="catalog__item-image" :src="product.image" alt="product">
    <h3 class="catalog__item-title">{{ product.title }}</h3>
    <p class="catalog__item-price">{{ product.price }} руб.</p>
  </li>
</template>

<script>

export default {
  name: 'AppCatalogCard',
  props: ['data', 'usedInFavorites'],
  methods: {
    goToInfo(productId) {
      this.$router.push({ name: 'info', params: { id: productId } });
    },
    removeFromFavourites(product) {
      this.$store.state.favourites.pop(product);
      console.log(product);
    },
  },
  created() {
    // props are exposed on `this`
    console.log(this.usedInFavorites);
  },
};
</script>

<style>

</style>
