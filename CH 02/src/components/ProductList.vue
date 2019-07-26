<template>
    <div class="product-list">
        <ProductItem v-for="product in products" :product="product" :key="product.id" v-on:add="triggerAdd" />
    </div>
</template>

<script>
import ProductItem from "./ProductItem.vue"
export default {
    props : ["products"],
    methods: {
        triggerAdd: function (product) {
            this.$emit('add', product);
        }
    },
    components: {
        ProductItem
    }
}
</script>