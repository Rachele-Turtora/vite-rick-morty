<script>
import { store } from "../store";

export default {
    name: "FoundCharactersComponent",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <p>Found {{ store.results.length }} characters</p>
    </div>
</template>

<style scoped>
p {
    padding: 20px;
    font-weight: bold;
}
</style>