<script setup>
const props = defineProps({
  product: Object,
});
</script>
<template>
  <div class="card product-item" style="width: 18rem">
    <img :src="product.image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-text">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }} Credits</p>
      <Button class="btn btn-primary card-btn">Add To Cart</Button>
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
