<script>
import SearchComponent from "./SearchComponent.vue";
import CardsComponent from "./CardsComponent.vue";
import FoundCharactersComponent from "./FoundCharactersComponent.vue";

import axios from 'axios';
import { store } from "../store";

export default {
    name: "MainComponent",
    components: {
        CardsComponent,
        FoundCharactersComponent,
        SearchComponent
    },
    data() {
        return {
            store
        }
    },
    created() {
        this.store.loading = true;

        axios.get(this.store.apiUrl).then(response => {
            this.store.results = response.data.results;
            this.store.loading = false;
        })
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div v-if="this.store.loading">
                <p>Caricamento in corso...</p>
            </div>
            <div v-else>
                <SearchComponent />
                <CardsComponent />
                <FoundCharactersComponent />
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    padding-top: 30px;
}
</style>