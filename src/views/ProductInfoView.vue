<template>t
  <div class="container">
    <div class="links">
      <router-link to="/" class="links__element">Главная</router-link>
        ›
      <router-link to=""
      class="links__element">{{ productsData[id].title }}</router-link>
    </div>
    <div class="product">
      <img class="product__img" :src="productsData[id].image" alt="фото товара">
      <div class="product__info">
        <h2 class="product__title">{{ productsData[id].title }}</h2>
        <p class="product__description">{{ productsData[id].description }}</p>
        <p class="product__price">{{ productsData[id].price }} руб.</p>
        <button
          :disabled="isDisabledCheck(id)"
          class="btn" @click="addToFavourites(id)"
          :class="{'disabled' : isDisabledCheck(id)}">
          Избранное</button>
      </div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProdcutInfoView',
  data() {
    return {
      id: this.$route.params.id - 1,
    };
  },
  computed: {
    ...mapGetters([
      'productsData', 'favouriteProducts',
    ]),
    ...mapActions([
      'getFavouriteProduct',
    ]),
  },
  methods: {
    addToFavourites(id) {
      this.$store.dispatch('getFavouriteProduct', {
        product: this.productsData[id],
      });
    },
    isDisabledCheck(id) {
      return this.$store.state.favourites.find((item) => item.id - 1 === id);
    },
  },
};
</script>

<style>

</style>
