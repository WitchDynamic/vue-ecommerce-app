<script setup>
import ProductItem from "./ProductItem.vue";
import { products } from "../Products";
</script>

<template>
  <h1 class="title">Creatures List</h1>
  <div class="product-grid">
    <div class="product-container" v-for="product in products">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  padding-bottom: 2rem;
  color: #e2e1e1;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 0 auto;
  justify-content: center;
  max-width: 1500px;
}

.product-container {
  display: flex;
  justify-content: center;
  padding: 10px;
}
</style>
