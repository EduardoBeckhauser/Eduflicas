import { ref } from "vue";
import { defineStore } from "pinia";
import ResultAPI from "../api/results";
const resultApi = new ResultAPI();

export const useResultStore = defineStore("result", () => {
  const results = ref([]);
  async function get_results() {
    results.value = await resultApi.getAllResults();
  }

  return { results, get_results };
});
