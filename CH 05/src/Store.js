import Vuex from 'vuex'
import api from "./api/productsAPI"

//pure functions
function createAction(mutationName){
  return function(context, newProducts){
    context.commit(mutationName, newProducts);
  } 
}

function createActions(mutations){
  const actions = {};
  mutations.forEach(mutationName => {
    actions[mutationName] = createAction(mutationName);
  });
  return actions;
}

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

function filterProducts(query, products){
  return products.filter(function isInQuery(product){
    return product.name.includes(query.text); 
  });
}

export default function Store(){
  return new Vuex.Store({
    state: {
      products: [],
      shoppingMap : Object.create(null),
      query : { text: "" }
    },
    mutations: {
      reset_products(state, newProducts) {
        state.products = newProducts;
      },
      set_query(state, newQuery) {
        state.query = newQuery;
      },
      add_to_cart(state, product){
        state.shoppingMap = addProductToMap(product, state.shoppingMap);
      },
      remove_from_cart(state, product){
        state.shoppingMap = removeProductFromMap(product, state.shoppingMap);
      }
    },
    actions: {
      ...createActions([
        "set_query",
        "add_to_cart",
        "remove_from_cart"
      ]),
      reload_products(context){
        api.fetchProducts().then(function(products){
          context.commit("reset_products", products)
        });
      }
    },
    getters: {
      cart(state){
        return toCartView(state.shoppingMap)
      },
      products(state) {
        return filterProducts(state.query, state.products);
      }
    }
  });
}
