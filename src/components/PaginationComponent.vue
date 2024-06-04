<script>
import { store } from "../store";

export default {
    name: "Pagination",
    data() {
        return {
            store
        }
    },

    methods: {
        prev() {
            if (store.currentPage !== 1) {
                store.currentPage -= 1;
            } else {
                store.currentPage = 42;
            }
            this.$emit('search')

        },
        next() {
            if (store.currentPage !== 42) {
                store.currentPage += 1;
            } else {
                store.currentPage = 1;
            }
            this.$emit('search')
        }
    }
}
</script>

<template>
    <nav class="d-flex justify-content-center my-4" aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" @click="prev()"><a class="page-link" href="#">Prev</a></li>
            <li class="page-item" @click="next()"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>