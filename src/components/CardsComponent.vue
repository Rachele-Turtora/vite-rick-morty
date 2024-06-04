<script>
import { store } from "../store";

export default {
    name: "CardsComponent",
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <div class="row">
        <div class="card col-12 col-md-4 col-lg-3 border-0" v-for="result in store.results" :key="result.name">
            <img :src="result.image" :alt="result.name">
            <h3 class="fw-semibold">{{ result.name }}</h3>
            <div class="my-2">
                <p>{{ result.status }}</p>
                <p>{{ result.species }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    height: 220px;
    width: 220px;
    border-radius: 50%;
    margin: 15px 0;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>