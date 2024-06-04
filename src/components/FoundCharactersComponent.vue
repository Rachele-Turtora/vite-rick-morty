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
        <p class="fw-bold p-2">Found {{ store.results.length }} characters</p>
    </div>
</template>