<template>
  <div class="container">
    <div class="links">
      <router-link to="/" class="links__element">Главная</router-link>
        ›
      <router-link to="/favourites"
      class="links__element">Избранное</router-link>
  </div>
  <h1>Избранное</h1>
  <h1 v-if="favouriteProducts.length === 0" class="placeholder-message">Список избранного пуст</h1>
  </div>

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
