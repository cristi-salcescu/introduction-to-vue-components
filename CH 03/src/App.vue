<template>
  <div>
    <Header />
    <div class="content">
      <div>
        <ProductSearch />
        <ProductList :products="products" />
      </div>
      <ShoppingCart :cart="cart" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import ProductList from "./components/ProductList.vue"
import ShoppingCart from "./components/ShoppingCart.vue"
import ProductSearch from "./components/ProductSearch.vue"

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
    ShoppingCart,
    ProductSearch
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

input {
    padding: 10px;
    margin: 10px;
    color: #654321;
    border: 1px solid #FF9C00;
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
