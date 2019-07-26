<template>
  <div>
    <Header />
    <ProductItem v-bind:product="product"/>
  </div>
</template>

<script>
import Header from "./Header.vue"
import ProductItem from "./ProductItem.vue"

const product = {
  "id" : 1,
  "name" : "mango",
  "price" : 10
}

export default {
  name: "app",
  data(){
    return { product }
  },
  components: {
    Header,
    ProductItem
  }
}
</script>