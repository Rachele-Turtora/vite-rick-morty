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
        axios.get(this.store.apiUrl).then(response => {
            this.store.results = response.data.results
        })
    }
}
</script>

<template>
    <main>
        <div class="container">
            <SearchComponent />
            <CardsComponent />
            <FoundCharactersComponent />
        </div>
    </main>
</template>

<style scoped>
main {
    padding-top: 30px;
}

.container {
    max-width: 80%;
    margin: 0 auto;
}
</style>