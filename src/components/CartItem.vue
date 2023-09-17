<script setup>
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

const props = defineProps({
  product: Object,
});
</script>

<template>
  <div style="display: flex">
    <img
      :src="product.image"
      width="110"
      height="110"
      style="border-radius: 10px"
    />
    <div class="product-info">
      <h4>{{ product.name }}</h4>
      <p>Quantity: {{ product.amount }}</p>
      <button
        @click="
          () => {
            cartStore.removeItem(product.id);
          }
        "
        class="trash-button"
      >
        <img src="@/assets/trash-icon.svg" width="25" height="25" />
      </button>
    </div>
    <div class="product-price">
      <h5 style="color: #fff">{{ product.price * product.amount }} Credits</h5>
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
