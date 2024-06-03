<script>
export default {
    name: "SearchComponent"
}
</script>

<template>
    <div class="sm-container">
        <input type="text" placeholder="Search character">
        <select name="" id="">
            <option value="">Select status</option>
        </select>
        <button class="search">Search</button>
        <button class="reset">Reset</button>
    </div>
</template>

<style scoped>
.sm-container {
    margin-bottom: 10px;
}

input,
select,
button {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

.search,
.reset {
    border: none;
}

.search {
    color: white;
    background-color: #0a6efd;
}

.reset {
    background-color: #ffc106;
}
</style>