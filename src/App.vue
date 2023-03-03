<template>
  <header class="header">
    <img src="./assets/logo.svg" alt="logo" class="logo">
       <nav class="navbar">
        <ul class="navbar__list">
          <li class="navbar__item">
            <router-link class="navbar__link" to="/">Главная</router-link>
          </li>
          <li class="navbar__item">
            <router-link class="navbar__link" to="/about">Страница товара</router-link>
          </li>
        </ul>
    </nav>
    <router-link class="wishlist" to="/">
      <img class="wishlist__icon" src="./assets/wishlist-icon--fill.svg" alt="wishlist">
    </router-link>
  </header>

  <div class="promo">

  </div>

  <router-view/>
</template>
