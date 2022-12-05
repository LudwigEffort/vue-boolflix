<template>
  <div class="col">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            :src="imgUrl"
            alt="No cover"
            style="width:300px;height:300px;"
          >
        </div>
        <div class="flip-card-back">
          <p>Title: {{ title }}</p>
          <p>Original Title: {{ originalTitle }}</p>
          <p>Language: <lang-flag :iso="language" /></p>
          <p>Rating: {{ score }}</p>
          <font-awesome-icon
            icon="fa-solid fa-star"
            :style="{color: 'yellow'}"
          />
          <font-awesome-icon
            icon="fa-solid fa-star-half-stroke"
            :style="{color: 'yellow'}"
          />
          <font-awesome-icon
            icon="fa-regular fa-star"
            :style="{color: 'yellow'}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LangFlag from 'vue-lang-code-flags';

export default {
  name: 'ItemCard',
  components: {
    LangFlag,
  },
  props: {
    title: String,
    originalTitle: String,
    language: String,
    score: Number,
    imgUrl: String,
  },
};
</script>

<style lang="scss" scoped>
.flip-card {
  border-radius: 15px;
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  border-radius: 15px;
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  border-radius: 15px;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  border-radius: 15px;
  background-color: #bbb;
  color: black;
}

.flip-card-front img {
  border-radius: 15px;
}

.flip-card-back {
  border-radius: 15px;
  padding: 1rem;
  text-align: start;
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
