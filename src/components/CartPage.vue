<script setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();
import CartItem from "./CartItem.vue";
</script>

<template>
  <h1 class="title">Your Cart</h1>
  <div class="container">
    <div class="row align-items-start">
      <div>
        <div v-if="!cartStore.isEmpty">
          <div v-for="product in cartStore.cart" style="margin: 1rem">
            <CartItem :product="product" />
          </div>
        </div>
        <div v-else class="empty-cart-text">
          <h3>Your cart is empty!</h3>
        </div>
      </div>
      <div class="total-price-spacer" />
      <div>
        <div class="total-price-div mt-3">
          <h2>Total Price:</h2>
          <h3>{{ cartStore.totalPrice }} Credits</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  padding-bottom: 2rem;
  color: #e2e1e1;
}
.cart-grid {
  justify-content: center;
  display: flex;
  padding: 10px;
}
.total-price-div {
  color: #e2e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
  float: right;
}
.empty-cart-text {
  display: flex;
  justify-content: center;
}
.total-price-spacer {
  border-bottom: solid;
  border-width: thin;
  border-color: #3c3c3c;
}
</style>
