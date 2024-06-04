<script>
export default {
    name: "Card",
    props: ["img", "name", "status", "species"]
}
</script>

<template>
    <img :src="img" :alt="name">
    <h3 class="fw-semibold">{{ name }}</h3>
    <div class="my-2">
        <p>{{ status }}</p>
        <p>{{ species }}</p>
    </div>
</template>

<style scoped>
img {
    height: 220px;
    width: 220px;
    border-radius: 50%;
    margin: 15px 0;
    object-fit: cover;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>