<script>
import CardsComponent from "./CardsComponent.vue";

import axios from 'axios';
import { store } from "../store";

export default {
    name: "MainComponent",
    components: {
        CardsComponent,
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
            <CardsComponent />
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
    height: 100%;
    background-color: aquamarine;
}
</style>