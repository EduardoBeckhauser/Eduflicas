<script>
import axios from "axios";
import { mapStores, mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  data() {
    return {
      id: 73,
      tv: {
        image: {},
        rating: {},
      },
    };
  },
  computed: {
    ...mapStores(useCounterStore),
    ...mapState(useCounterStore, ["count"]),
  },
  async created() {
    await this.buscar();
    await this.increment();
  },
  methods: {
    ...mapActions(useCounterStore, ["increment"]),
    async buscar() {
      const url = `https://api.tvmaze.com/shows/${this.id}`;
      const { data } = await axios.get(url);
      this.tv = data;
    },
  },
};
</script>
<template>
  <div class="card">
    <h1>
      {{ tv.name }}
    </h1>
    <img :src="tv.image.medium" alt="" />
    <hr />
    <h2>Avaliação: {{ tv.rating.average }}</h2>
    <p>id: {{ id }}</p>
  </div>
  <div class="line"></div>
</template>
<style></style>
