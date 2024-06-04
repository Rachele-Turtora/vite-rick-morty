<script>
export default {
    name: "SearchComponent"
}
</script>

<template>
    <div class="sm-container mb-2">
        <div class="d-inline-block">
            <input type="text" placeholder="Search character">
            <select name="" id="">
                <option value="">Select status</option>
            </select>
        </div>
        <div class="d-inline-block">
            <button class="search border-0">Search</button>
            <button class="reset border-0">Reset</button>
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