<template>
    <div className="shopping-cart">
      <ShoppingItem v-for="product in cart.list" :product="product" :key="product.id" @remove="triggerRemove" />
      <div class="shopping-cart-total">Total: {{cart.total}}</div>
    </div>
</template>

<script>
import ShoppingItem from "./ShoppingItem.vue"
export default {
    props : ["cart"],
    methods: {
        triggerRemove: function (product) {
            this.$emit('remove', product);
        }
    }, 
    components: {
        ShoppingItem
    }
}
</script>

<style>
.shopping-cart-total {
    padding: 10px;
    margin: 10px;
    color: #654321;
    border: 1px solid #FF9C00;
}
</style>

