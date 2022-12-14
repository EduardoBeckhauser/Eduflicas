import { createRouter, createWebHistory } from "vue-router";
import FilmesView from "../views/FilmesView.vue";
import SinopseView from "../views/SinopseView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Filmes",
      component: FilmesView,
    },
    {
      path: "/info/:id",
      name: "Sinopse",
      component: SinopseView,
      props: true,
    },
  ],
});

export default router;
