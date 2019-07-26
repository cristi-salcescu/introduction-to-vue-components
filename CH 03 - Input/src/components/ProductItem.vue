<template>
  <div class="product-list-item">
    <div>{{product.name}}</div>
    <div><button type="button" @click="triggerAdd">Add</button></div>
  </div>
</template>

<script>
export default {
  props : ["product"],
  methods: {
        triggerAdd: function () {
            this.$emit('add', this.product);
        }
  }
}
</script>

<style>
.product-list-item {
    padding: 10px;
    margin: 10px;
    background-color: #CC6500;
    color: #FFF;
}
</style>
