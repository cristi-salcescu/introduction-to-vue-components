<template>
  <div>
    <Header />
    <div class="content">
      <div>
        <ProductSearch @search="searchProducts" />
        <ProductList @add="addToCart" :products="filteredProducts" />
      </div>
      <ShoppingCart @remove="removeFromCart" :cart="cart" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import ProductList from "./components/ProductList.vue"
import ShoppingCart from "./components/ShoppingCart.vue"
import ProductSearch from "./components/ProductSearch.vue"

//pure functions
function addProductToMap(product, shoppingMap){
  const newShoppingMap = { ...shoppingMap };
  newShoppingMap[product.id] = incrementProductQuantity(product, shoppingMap);
  return Object.freeze(newShoppingMap);
}

function removeProductFromMap(product, shoppingMap){
  const newShoppingMap = { ...shoppingMap };
  delete newShoppingMap[product.id];
  return Object.freeze(newShoppingMap);
}

function incrementProductQuantity(product, shoppingMap) {
  const quantity = getProductQuantity(product, shoppingMap) + 1;
  return Object.freeze({ ...product, quantity });
}

function getProductQuantity(product, shoppingMap) {
  const existingProduct = shoppingMap[product.id];
  if (existingProduct) {
    return existingProduct.quantity;
  }

  return 0;
}

function filterProducts(query, products){
  return products.filter(function isInQuery(product){
    return product.name.includes(query.text); 
  });
}

function toCartView(shoppingMap) {
  const shoppingList = Object.values(shoppingMap);
  return Object.freeze({
    list: shoppingList,
    total: shoppingList.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

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

export default {
  name: "app",
  computed: {
    cart(){
      return toCartView(this.shoppingMap)
    }
  },
  data(){
    return {
      shoppingMap : Object.create(null),
      products: products,
      filteredProducts : products
    }
  },
  methods : {
    addToCart(product) {
      this.shoppingMap = addProductToMap(product, this.shoppingMap);
    },
    removeFromCart(product) {
      this.shoppingMap = removeProductFromMap(product, this.shoppingMap);
    },
    searchProducts(query){
      this.filteredProducts = filterProducts(query, this.products);
    }
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
