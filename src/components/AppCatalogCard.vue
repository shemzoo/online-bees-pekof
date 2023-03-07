<template>
  <li @click="goToInfo(product.id)" @keydown="goToDetails()"
    :class="{ 'catalog__item': !usedInFavorites, 'catalog__item--fav': usedInFavorites }"
    v-for="product in data" :key="product.id">
    <img class="catalog__item-image" :src="product.image" alt="product">
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
  },
  created() {
    // props are exposed on `this`
    console.log(this.usedInFavorites);
  },
};
</script>

<style>

</style>
