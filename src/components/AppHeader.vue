<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/images/logo.svg" alt="logo" class="logo">
    </router-link>
     <div class="wishlist wishlist__wrapper">
      <router-link to="/favourites">
          <img class="wishlist__icon" src="../assets/images/wishlist-icon--fill.svg" alt="wishlist">
          <img v-if="favouriteProducts.length" class="wishlist__counter-icon" width="16" height="16"
          src="../assets/images/ellipse.svg" alt="counter">
          <p v-if="favouriteProducts.length"
          class="wishlist__counter">{{ favouriteProducts.length }}</p>
      </router-link>
      </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters([
      'favouriteProducts',
    ]),
  },
};

</script>

<style>

</style>
