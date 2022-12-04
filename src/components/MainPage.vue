<template>
  <main class="container-fluid text-center bg-secondary p-4">
    <h2 v-if="arrMovies.length">
      Movies
    </h2>
    <div class="row row-cols-4 g-5">
      <ItemCard />
    </div>
    <!-- <ul
      v-for="objMovies in arrMovies"
      :key="objMovies.id"
    >
      <li>{{ objMovies.title }}</li>
      <li>{{ objMovies.original_title }}</li>
      <li><lang-flag :iso="objMovies.original_language" /></li>
      <li>{{ objMovies.vote_average }}</li>
    </ul> -->

    <h2 v-if="arrTV.length">
      TV Shows
    </h2>
    <div class="row row-cols-4 g-5">
      <ItemCard />
    </div>
  </main>
</template>

<script>
// import LangFlag from 'vue-lang-code-flags';
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'MainPage',
  components: {
    ItemCard,
    // LangFlag,
  },
  props: {
    arrMovies: Array,
    arrTV: Array,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  color: white;
}
li {
  color: white;
}
</style>
