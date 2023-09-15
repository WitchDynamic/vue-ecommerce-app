<script setup>
import { ref, computed } from "vue";
import ProductsPage from "./components/ProductsPage.vue";
import CartPage from "./components/CartPage.vue";

const routes = {
  "/": ProductsPage,
  "/cart": CartPage,
};

const currentPath = ref(window.location.hash || "#/");

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"];
});
</script>

<template>
  <a href="#/">Products</a>
  <a href="#/cart">Cart</a>
  <component :is="currentView" />
</template>

<style scoped></style>
