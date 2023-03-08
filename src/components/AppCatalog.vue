<template>
  <div class="promo"></div>
     <ul class="catalog">
        <AppCatalogCard :data="productsData" />
     </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters([
      'productsData',
    ]),
  },
  mounted() {
    this.getData();
  },
};

</script>

<style>

</style>
