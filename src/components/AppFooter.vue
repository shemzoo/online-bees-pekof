<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__left">
        <router-link to="/favourites">
          <p class="footer__link">Избранное</p>
        </router-link>
      </div>
      <div class="footer__right">
        <p class="footer__contacts">8 800 888 00 88</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style>

</style>
