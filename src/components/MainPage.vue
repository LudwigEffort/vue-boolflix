<template>
  <main>
    <ul
      v-for="objMovies in arrMovies"
      :key="objMovies.id"
    >
      <li>{{ objMovies.title }}</li>
      <li>{{ objMovies.original_title }}</li>
      <li>{{ objMovies.original_language }}</li>
      <li>{{ objMovies.vote_average }}</li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    arrMovies: Array,
  },
};
</script>

<style lang="scss" scoped>
main {
  height: 800px;
  background-color: #434343;
}
</style>
