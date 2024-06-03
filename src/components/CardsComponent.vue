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
    <ul>
        <li class="card" v-for="result in store.results">
            <img :src="result.image" :alt="result.name">
            <h3>{{ result.name }}</h3>
            <div class="description">
                <p>{{ result.status }}</p>
                <p>{{ result.species }}</p>
            </div>
        </li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 25%;
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

.description {
    margin: 15px 0;
}
</style>