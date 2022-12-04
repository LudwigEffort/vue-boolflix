<template>
  <main>
    <h2 v-if="arrMovies.length">
      Movies
    </h2>
    <ul
      v-for="objMovies in arrMovies"
      :key="objMovies.id"
    >
      <li>{{ objMovies.title }}</li>
      <li>{{ objMovies.original_title }}</li>
      <li>{{ objMovies.original_language }}</li>
      <li>{{ objMovies.vote_average }}</li>
    </ul>

    <h2 v-if="arrTV.length">
      TV Shows
    </h2>
    <ul
      v-for="objTV in arrTV"
      :key="objTV.id"
    >
      <li>{{ objTV.name }}</li>
      <li>{{ objTV.original_name }}</li>
      <li>{{ objTV.original_language }}</li>
      <li>{{ objTV.vote_average }}</li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    arrMovies: Array,
    arrTV: Array,
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #434343;
}
li {
  color: white;
}
</style>
