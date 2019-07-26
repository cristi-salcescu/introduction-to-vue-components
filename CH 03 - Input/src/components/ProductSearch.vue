<template>
    <form class="search-form">
        <Input
            v-model="query.text"
            placeholder="Product"
            type="text"
            name="text"
        />
        <button type="search" class="search-button" @click.prevent="triggerSearch">Search</button>
    </form>
</template>

<script>
import Input from "./Input.vue"
export default {
    data(){
        return {
            query : {
                text : ""
            }
        }
    },
    methods: {
        triggerSearch: function () {
            console.log(this.query);
            this.$emit('search', this.query);
        }
    },
    components: {
        Input
    }
}
</script>

<style>
.search-button {
    padding: 10px;
    margin: 10px;
    background-color: #FF9C00;
    color: #FFF;
    border: 1px solid #FF9C00;
}

.search-form {
    display: flex;
    justify-content: space-between;
 }
</style>

