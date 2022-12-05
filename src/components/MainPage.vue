<template>
  <main class="container-fluid text-center bg-secondary p-4">
    <h1 v-if="arrMovies.length">
      Movies
    </h1>
    <div class="row row-cols-auto g-4">
      <ItemCard
        v-for="objMovies in arrMovies"
        :key="objMovies.id"
        :title="objMovies.title"
        :original-title="objMovies.original_title"
        :language="objMovies.original_language"
        :score="convertScore(objMovies.vote_average)"
        :img-url="generateUrl(objMovies.poster_path)"
      />
    </div>

    <h1 v-if="arrTV.length">
      TV Shows
    </h1>
    <div class="row row-cols-auto g-4">
      <ItemCard
        v-for="objTV in arrTV"
        :key="objTV.id"
        :title="objTV.name"
        :original-title="objTV.original_name"
        :language="objTV.original_language"
        :score="convertScore(objTV.vote_average)"
        :img-url="generateUrl(objTV.poster_path)"
      />
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
    //  LangFlag,
  },
  props: {
    arrMovies: Array,
    arrTV: Array,
  },
  data() {
    return {
      baseImgUrl: 'https://image.tmdb.org/t/p/',
      imgSize: 'w342',
    };
  },
  methods: {
    generateUrl(path) {
      if (path) {
        return this.baseImgUrl + this.imgSize + path;
      }
      return null;
    },
    convertScore(score) {
      const maxScore = 5;
      const decimal = (parseFloat((score / 2).toFixed(1))) % 1;
      let finalDecimal = 0;
      if (decimal >= 0.3 && decimal <= 0.7) {
        finalDecimal = 0.5;
      } else if (decimal > 0.7) {
        finalDecimal = 1;
      } else { finalDecimal = 0; }
      return {
        finalScore: Math.floor(score / 2) + finalDecimal,
        maxScore,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  margin: 1rem 0;
}
li {
  color: white;
}
</style>
