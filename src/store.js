import { reactive } from "vue";

export const store = reactive({
    results: [],
    loading: true,
    apiUrl: "https://rickandmortyapi.com/api/character"
})