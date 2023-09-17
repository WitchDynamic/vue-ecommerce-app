<script setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
</script>

<template>
  <div style="display: flex">
    <img
      :src="cartStore.products[0].image"
      width="110"
      height="110"
      style="border-radius: 10px"
    />
    <div class="product-info">
      <h4>{{ cartStore.products[0].name }}</h4>
      <p>Quantity: 2</p>
      <Button class="trash-button">
        <img src="@/assets/trash-icon.svg" width="25" height="25" />
      </Button>
    </div>
    <div class="product-price">
      <h5 style="color: #fff">Credits</h5>
    </div>
  </div>
</template>

<style scoped>
.product-info {
  color: white;
  margin-left: 1rem;
}
.trash-button {
  background: transparent;
  border: none;
}
.product-price {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
}
</style>
