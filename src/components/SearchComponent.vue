<script>
import { store } from "../store";
export default {
    name: "SearchComponent",
    emits: ["search"],
    data() {
        return {
            store
        }
    },

    methods: {
        reset() {
            store.searchKeyInput = "";
            store.searchKeySelect = "";
            this.$emit('search');
        }
    }
}
</script>

<template>
    <div class="sm-container mb-2">
        <div class="d-inline-block">
            <input type="text" placeholder="Search character" @change="$emit('search')" v-model="store.searchKeyInput">
            <select aria-label="Default select example" @change="$emit('search')" v-model="store.searchKeySelect">
                <option selected value="">Select status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
        <div class="d-inline-block">
            <button class="search border-0">Search</button>
            <button class="reset border-0" @click="reset()">Reset</button>
        </div>
    </div>
</template>

<style scoped>
input,
select,
button {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

.search {
    color: white;
    background-color: #0a6efd;
}

.reset {
    background-color: #ffc106;
}
</style>