<template>
  <li class="catalog__list-item" v-for="product in productsData" :key="product.id">
      <img :src="product.image" alt="productImage">
      <h3>{{ product.title }}</h3>
      <p>{{ product.price }}</p>
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
};
</script>

<style>

</style>
