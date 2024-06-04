import { reactive } from "vue";

export const store = reactive({
    results: [],
    loading: true,
    searchKeySelect: "",
    searchKeyInput: "",
    apiUrl: "https://rickandmortyapi.com/api/character"
})