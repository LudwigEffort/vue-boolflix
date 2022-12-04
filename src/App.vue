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
  data() {
    return {
      baseApiUrl: 'https://api.themoviedb.org/3',
      apiKey: 'b935f03551ba44af8b30664391480eca',
      lang: 'en-US',
      arrMovies: [],
    };
  },
  methods: {
    search(queryString) {
      axios.get(`${this.baseApiUrl}/search/movie`, {
        params: {
          api_key: this.apiKey,
          query: queryString,
          language: this.lang,
        },
      })
        .then((responseAxios) => {
          this.arrMovies = responseAxios.data.results;
          console.log(this.arrMovies);
        });
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
