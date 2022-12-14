<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import { useMoviesStore } from "@/stores/movies";
import MoviesComp from "@/components/MoviesComp.vue";
export default {
  components: { MoviesComp },
  async created() {
    await this.get_genres();
    for (const genre of this.genres) {
      await this.getMoviesByGenre(genre.id);
    }
  },
  computed: {
    ...mapStores(useGenreStore),
    ...mapStores(useMoviesStore),
    ...mapState(useGenreStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenreStore, ["get_genres"]),
    ...mapActions(useMoviesStore, ["getMoviesByGenre"]),
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    mostraFilme(filme) {
      alert(filme.id);
    },
  },
};
</script>
<template>
  <div class="filmes">
    <div
      class="filme-info"
      v-for="genre of genres"
      :key="genre.id"
      :id="genre.id"
    >
      <h1>{{ genre.name }}</h1>
      <div class="lista-filmes">
        <MoviesComp :genre="genre.id" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.lista-filmes {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
}

.lista-filmes::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
.lista-filmes::-webkit-scrollbar-thumb {
  border-radius: 40px;
  width: 250px;
  background-color: greenyellow;
}

.lista-filmes:after {
  transition: linear 0.3s;
  width: 65px;
  height: 1750vh;
  position: absolute;
}
</style>
