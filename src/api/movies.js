import axios from "axios";

export default class MoviesAPI {
  async getMoviesByGenre(genre_id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=359348e9e37baf725f6f1fb4e08b6452&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre_id}&with_watch_monetization_types=flatrate`
    );
    return data.results;
  }
  async buscarMoviePorId(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=359348e9e37baf725f6f1fb4e08b6452&language=pt-BR`
    );
    return data;
  }
}
