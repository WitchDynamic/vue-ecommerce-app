<script setup>
import QuantityButton from "./QuantityButton.vue";
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
const cartStore = useCartStore();

const props = defineProps({
  product: Object,
});
// elevate quantity state to parent to pass to QuantityButton and Add To Cart button
const quantity = ref(0);

function updateQuantity(val) {
  // do not allow value to go below 0
  quantity.value + val < 0 ? (quantity.value = 0) : (quantity.value += val);
}
</script>

<template>
  <div class="card product-item" style="width: 18rem">
    <img :src="product.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-text">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }} Credits</p>
      <QuantityButton :quantity="quantity" @updateQuantity="updateQuantity" />
      <button
        @click="
          () => {
            cartStore.addItems(quantity, product);
            quantity = 0;
          }
        "
        class="btn btn-primary card-btn"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>

<style>
.card {
  background-color: #292929;
}

.card-text {
  color: #e2e1e1;
}

.card-btn {
  width: 100%;
}
</style>
