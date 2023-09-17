<script setup>
// ProductItem parent handles quantity
// minus and plus buttons emit event to update quantity value
const props = defineProps({
  quantity: Number,
});
</script>

<template>
  <div class="wrapper">
    <button
      @click="$emit('updateQuantity', -1)"
      class="btn btn-outline-secondary"
      type="button"
    >
      -
    </button>

    <input type="text" class="form-control input-box" :value="quantity" />
    <button
      @click="$emit('updateQuantity', 1)"
      class="btn btn-outline-secondary"
      type="button"
    >
      +
    </button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  margin: 1rem;
}
.input-box {
  /* width: 50px; */
  text-align: center;
  cursor: pointer;
}
</style>
