<template>
  <div>
    <Header />
    <div class="content">
      <ProductList :products="products" />
      <ShoppingCart :cart="cart" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import ProductList from "./components/ProductList.vue"
import ShoppingCart from "./components/ShoppingCart.vue"

const products = [
  {
      "id" : 1,
      "name" : "mango",
      "price" : 10
  },
  {
      "id" : 2,
      "name" : "apple",
      "price": 5
  }];

const cart = { list: products }; 

export default {
  name: "app",
  data(){
    return { products, cart }
  },
  components: {
    Header,
    ProductList,
    ShoppingCart
  }
}
</script>

<style>
button {
    background: #FAF1DD;
    border: 1px solid #FAF1DD;
    color: #654321;
    padding: 5px;
    cursor: pointer;
}

header {
    text-align: center;
}

.content {
    display: flex;
    width: 70%;
    margin: 0 auto;
}

.content > div{
    flex : 1;
}
</style>
