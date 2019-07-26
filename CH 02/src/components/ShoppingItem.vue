<template>
    <div class="shopping-cart-item">
        <div>{{product.name}}</div>
        <div>{{product.quantity}}</div>
        <div>
            <button type="button" v-on:click="triggerRemove">
            Remove
            </button>
        </div>
    </div>
</template>

<script>
export default {
  props : ["product"],
  methods: {
        triggerRemove: function () {
            this.$emit('remove', this.product);
        }
  }  
}
</script>

<style>
.shopping-cart-item {
    padding: 10px;
    margin: 10px;
    color: #FFF;  
    background-color: #FF9C00;
    display: flex;
    flex-direction: column;
}

.shopping-cart-item div {
    margin: 5px;
}
</style>