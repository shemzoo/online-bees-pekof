<template>
  <div class="container">
     <ul class="catalog">
        <AppCatalogCard />
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppCatalogCard from './AppCatalogCard.vue';

export default {
  name: 'AppCatalog',
  components: {
    AppCatalogCard,
  },
  props: {
  },
  methods: {
    ...mapActions([
      'getData',
    ]),
  },
  mounted() {
    this.getData();
  },
};

</script>

<style>

</style>
