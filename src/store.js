import { reactive } from "vue";

export const store = reactive({
    results: [],
    loading: true,
    searchKeySelect: "",
    searchKeyInput: "",
    currentPage: 1,
    apiUrl: "https://rickandmortyapi.com/api/character"
})