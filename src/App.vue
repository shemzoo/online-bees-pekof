<template>
  <header class="header">
    <router-link to="/">
      <img src="./assets/images/logo.svg" alt="logo" class="logo">
    </router-link>
       <nav class="navbar">
        <!-- <ul class="navbar__list">
          <li class="navbar__item">
            <router-link class="navbar__link" to="/">Главная</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/about">Страница товара</router-link>
          </li>
        </ul> -->
    </nav>
    <router-link class="wishlist" to="/favourites">
      <img class="wishlist__icon" src="./assets/images/wishlist-icon--fill.svg" alt="wishlist">
    </router-link>
  </header>

  <div class="promo">

  </div>

  <router-view/>
</template>
