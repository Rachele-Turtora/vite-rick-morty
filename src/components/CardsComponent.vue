<script>
import { store } from "../store";
import CardElement from "./CardElement.vue";
export default {
    name: "CardsComponent",
    components: {
        CardElement
    },

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
            <CardElement :img="result.image" :name="result.name" :status="result.status" :species="result.species" />
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
</style>