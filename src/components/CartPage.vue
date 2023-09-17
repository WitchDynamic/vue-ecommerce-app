<script setup>
import CartItem from "./CartItem.vue";
</script>
<template>
  <h1 class="title">Your Cart</h1>
  <div class="container">
    <div class="row align-items-start">
      <div class="col-8">
        <CartItem />
      </div>
      <div class="col-4">
        <div class="total-price-div">
          <h2>Total Price:</h2>
          <h3>10500 Credits</h3>
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
}
</style>
