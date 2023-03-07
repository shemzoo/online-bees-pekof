<template>
  <h1>Избранное</h1>
  <!-- <ul class="favourites">
    <li v-for="item in favouriteProducts" :key="item.product.id">
      <p>{{ item.product.description }}</p>
    </li>

    <li class="catalog__item"
      v-for="item in favouriteProducts" :key="item.product.id">
      <img class="catalog__item-image" :src="item.product.image" alt="product">
      <h3 class="catalog__item-title">{{ item.product.title }}</h3>
      <p class="catalog__item-price">{{ item.product.price }} руб.</p>
    </li>
  </ul> -->
  <ul class="catalog">
      <AppCatalogCard :data="favouriteProducts" :usedInFavorites='true' />
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCatalogCard from '../components/AppCatalogCard.vue';

export default {
  name: 'FavouriteProductsView',
  components: {
    AppCatalogCard,
  },
  computed: {
    ...mapGetters([
      'favouriteProducts',
    ]),
  },
};
</script>

<style>
</style>
