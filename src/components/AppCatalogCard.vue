<template>
  <li @click="goToInfo(product.id)" @keydown="goToDetails()" class="catalog__item"
   v-for="product in productsData" :key="product.id">
  <img class="catalog__item-image" :src="product.image" alt="product">
  <h3 class="catalog__item-title">{{ product.title }}</h3>
  <p class="catalog__item-price">{{ product.price }} руб.</p>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppCatalogCard',
  computed: {
    ...mapGetters([
      'productsData',
    ]),
  },
  methods: {
    goToInfo(productId) {
      this.$router.push({ name: 'info', params: { id: productId } });
    },
  },
};
</script>

<style>

</style>
