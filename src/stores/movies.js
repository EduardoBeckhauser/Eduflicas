import { ref } from "vue";
import { defineStore } from "pinia";
import MoviesAPI from "../api/movies";
const moviesApi = new MoviesAPI();

export const useMoviesStore = defineStore("movies", () => {
  const movies = ref([]);
  async function getMoviesByGenre(id) {
    const results = await moviesApi.getMoviesByGenre(id);
    movies.value.push({
      id,
      results,
    });
  }
  const moviesByGenreId = (id) => {
    const index = movies.value.findIndex((p) => p.id == id);
    console.log(index);
    console.log(id);
    if (index > -1) {
      return movies.value[index];
    }
    return {};
  };

  return { movies, moviesByGenreId, getMoviesByGenre };
});
