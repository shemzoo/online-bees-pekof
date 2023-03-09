<template>
<div class="wrapper">
  <AppHeader />

  <main class="page-body">
    <router-view/>
  </main>

  <AppFooter />
</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader, AppFooter,
  },
};
</script>
