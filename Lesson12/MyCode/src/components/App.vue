<template>
<!-- 3、使用 -->
<div id="app">
        <h1>Shopping Cart Example</h1>
        <hr>
        <h2>Products</h2>
        <ProductList/>
        <hr>
        <ShoppingCart/>
  </div>
</template>
<script>
//1、引入ProductList、ShoppingCart
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  //2、装进来，使用
    components:{
        ProductList,
        ShoppingCart,
    }
}
</script>
<style>
</style>