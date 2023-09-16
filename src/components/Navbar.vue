<script setup></script>

<template>
  <nav class="navbar navbar-fixed-top">
    <a class="navbar-brand" href="#/">Galactic Creature Exchange</a>
    <a class="cart-btn btn my-sm-0" href="#/cart">
      <img src="@/assets/cart-icon.svg" width="35" height="35" />
      <span class="badge badge-light">4</span>
    </a>
  </nav>
</template>

<style scope>
.navbar {
  background-color: #212121;
  box-shadow: 0 1px 5px 1px #000000;
  margin-bottom: 2rem;
}
.navbar-brand {
  color: #e2e1e1;
  font-size: 2rem;
  margin-left: 1rem;
}
.navbar-brand:hover {
  color: #ffffff;
}
.navbar-brand:focus {
  color: #b3b1b1;
}
.cart-btn {
  margin-right: 1rem;
  border: none;
}
.cart-btn:hover {
  background-color: #424242;
}
</style>
