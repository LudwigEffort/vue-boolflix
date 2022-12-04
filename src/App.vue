<template>
  <section>
    <HeaderPage @querySearch="search" />
    <MainPage />
  </section>
</template>

<script>
import axios from 'axios';
import HeaderPage from './components/HeaderPage.vue';
import MainPage from './components/MainPage.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    MainPage,
  },
  methods: {
    search(queryString) {

    },
  },
};
</script>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap";
  :root {
  --bs-light-rgb: 0, 0, 0;
}
</style>
