<template>
  <div class="product-item">
    <div>{{product.name}}</div>
    <div><button type="button">
         Add
         </button>
    </div>
  </div>
</template>

<script>
export default {
    props : ["product"]
}
</script>

<style>
.product-item {
    padding: 10px;
    margin: 10px;
    background-color: #CC6500;
    color: #FFF;
}
</style>
