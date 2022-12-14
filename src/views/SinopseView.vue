<script>
import MoviesAPI from "@/api/movies";
const movieApi = new MoviesAPI();
export default {
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  async mounted() {
    this.filme = await movieApi.buscarMoviePorId(this.id);
  },
  methods: {
    getImgUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w400${poster_path}`;
    },
    formataData(data) {
      return new Date(data).toLocaleDateString("pt-BR", { timeZone: "UTC" });
    },
    formataDuracao(duracao) {
      const min = duracao % 60;
      duracao = duracao - min;
      const hora = duracao / 60;
      return `${hora}h${min}min`;
    },
  },
};
</script>
<template>
  <main>
    <div class="movie_desc">
      <img :src="getImgUrl(filme.poster_path)" alt="" class="movie_img" />
    </div>
    <div class="direita">
      <h1 class="nome">{{ filme.title }}</h1>
      <h3>Sinopse:</h3>
      <p class="sinopse">{{ filme.overview }}</p>
      <h3>Data de Publicação:</h3>
      <p class="pub">{{ filme.release_date }}</p>
      <h3>Duração:</h3>
      <p class="duracao">{{ filme.runtime }} minutos.</p>
    </div>
    <!-- {{ filme }} -->
  </main>
</template>
<style scoped>
.sinopse {
  text-align: justify;
}
.img,
.movie_img {
  margin-top: 4em;
  margin-left: 42%;
  text-align: center;
  margin-bottom: 6%;
}
.nome {
  color: greenyellow;
  text-align: center;
}
main {
  display: flex;
  margin-left: 100px;
}
.direita {
  margin: 200px;
  margin-top: 50px;
  color: greenyellow;
  background-color: black;
  width: 1000px;
  padding-left: 4em;
  padding-right: 4em;
  border-radius: 1em;
}
h3 {
  font-family: "Times New Roman", Times, serif;
  color: white;
}
</style>
