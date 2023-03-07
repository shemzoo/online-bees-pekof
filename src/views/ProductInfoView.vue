<template>
  <h1>Product {{ id }} Details Page</h1>
  <div class="product-info">
    <img class="product-info__img" :src="productsData[id].image" alt="фото товара">
    <h2 class="product-info__title">{{ productsData[id].title }}</h2>
    <p class="product-info_description">{{ productsData[id].description }}</p>
    <button class="btn" @click="addToFavourites(id)">Избранное</button>
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
      'productsData',
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
  },
};
</script>

<style>

</style>
