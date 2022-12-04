<template>
  <div class="col">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            :src="imgUrl"
            alt="No cover"
            style="width:300px;height:350px;"
          >
        </div>
        <div class="flip-card-back">
          <p>{{ title }}</p>
          <p>{{ originalTitle }}</p>
          <p>{{ language }}</p>
          <p>{{ score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ItemCard',
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
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  padding: 1rem;
  text-align: start;
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>
