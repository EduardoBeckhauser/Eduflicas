<script>
import { mapStores, mapActions } from "pinia";
import { useMoviesStore } from "@/stores/movies";
export default {
  props: ["genre"],
  async created() {},
  computed: {
    ...mapStores(useMoviesStore),
  },
  methods: {
    ...mapActions(useMoviesStore, ["moviesByGenreId"]),
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w300${poster_path}`;
    },
  },
};
</script>
<template>
  <p
    v-for="movie of moviesByGenreId(genre).results"
    :key="movie.id"
    class="img"
  >
    <router-link :to="`/info/${movie.id}`">
      <img :src="getImgUrl(movie.poster_path)" alt=":D" class="poster" />
    </router-link>
  </p>
</template>
<style>
.img,
.poster {
  margin: 10px;
}
</style>
