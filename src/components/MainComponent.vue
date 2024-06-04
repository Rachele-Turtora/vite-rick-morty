<script>
import SearchComponent from "./SearchComponent.vue";
import CardsComponent from "./CardsComponent.vue";
import FoundCharactersComponent from "./FoundCharactersComponent.vue";
import PaginationComponent from "./PaginationComponent.vue";

import axios from 'axios';
import { store } from "../store";

export default {
    name: "MainComponent",
    components: {
        CardsComponent,
        FoundCharactersComponent,
        SearchComponent,
        PaginationComponent
    },
    data() {
        return {
            store
        }
    },

    methods: {
        searchCards() {
            this.store.loading = true;

            const params = {};

            params.page = this.store.currentPage;

            if (this.store.searchKeySelect) {
                params.status = this.store.searchKeySelect;
            }

            if (this.store.searchKeyInput) {
                params.name = this.store.searchKeyInput;
            }

            axios.get(this.store.apiUrl, { params }).then(response => {
                this.store.results = response.data.results;
                this.store.loading = false;
            })
        }
    },

    created() {
        this.searchCards();
    }
}
</script>

<template>
    <main class="pt-3">
        <div class="container">
            <div v-if="this.store.loading">
                <p>Caricamento in corso...</p>
            </div>
            <div v-else>
                <SearchComponent @search="searchCards" />
                <CardsComponent />
                <FoundCharactersComponent />
                <PaginationComponent @search="searchCards" />
            </div>
        </div>
    </main>
</template>