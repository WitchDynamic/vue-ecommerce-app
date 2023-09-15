<script setup></script>

<template>
  <nav class="navbar nav">
    <a class="navbar-brand" href="#/">Store</a>
    <a class="cart-btn btn my-sm-0" href="#/cart">
      <img src="@/assets/cart-icon.svg" width="35" height="35" />
    </a>
  </nav>
</template>

<style scope>
.nav {
  background-color: #282828;
  box-shadow: 0 1px 20px 5px #000000;
  margin-bottom: 2rem;
}
.navbar-brand {
  color: #b3b1b1;
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
  background-color: #363636;
}
</style>
