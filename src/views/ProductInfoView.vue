<template>
  <h1>Product {{ id }} Details Page</h1>
  <div class="product-info">
    <img class="product-info__img" :src="productsData[id].image" alt="фото товара">
    <h2 class="product-info__title">{{ productsData[id].title }}</h2>
    <p class="product-info_description">{{ productsData[id].description }}</p>
    <button class="btn" @click="addToWishlist(id)">Избранное</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
  },
  methods: {
    addToWishlist(id) {
      console.log(id);
    },
  },
};
</script>

<style>

</style>
