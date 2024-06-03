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
            {{ result.name }}
        </li>
    </ul>
</template>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
}

.card {
    background-color: red;
    height: 100px;
    width: calc(25% - 20px);
    margin: 10px;
}
</style>