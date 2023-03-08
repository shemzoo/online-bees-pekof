<template>
<div class="wrapper">
  <header class="header">
    <router-link to="/">
      <img src="./assets/images/logo.svg" alt="logo" class="logo">
    </router-link>
    <!-- <router-link class="wishlist" to="/favourites">
    </router-link> -->
     <div class="wishlist wishlist__wrapper">
        <img class="wishlist__icon" src="./assets/images/wishlist-icon--fill.svg" alt="wishlist">
        <img class="wishlist__counter-icon" width="16" height="16"
         src="./assets/images/ellipse.svg" alt="counter">
         <p class="wishlist__counter">4</p>
      </div>
  </header>

  <main class="page-body">
    <router-view/>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer__left">
        <router-link to="/favourites">
          <p class="footer__link">Избранное</p>
        </router-link>
      </div>
      <div class="footer__right">
        <p class="footer__contacts">8 800 80 80 08</p>
      </div>
    </div>
  </footer>
</div>
</template>
