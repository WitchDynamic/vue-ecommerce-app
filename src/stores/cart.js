import { defineStore } from "pinia";
import { products } from "@/Products.js";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products,
    cart: [],
  }),

  getters: {
    // total amount of items in the cart
    totalItemCount: (state) => {
      return state.cart.reduce((count, product) => count + product.amount, 0);
    },
    specificItemCount: (state) => (productId) => {
      // find by id
      const product = state.cart.find((i) => i.id === productId);
      //if product is in cart, return amount, else 0
      return product ? product.amount : 0;
    },
    //total price of items in the cart
    totalPrice: (state) => {
      return state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      );
    },
  },

  actions: {
    addItems(count, product) {
      const existingItem = this.cart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItem > -1) {
        // item is already in the cart, update count property
        this.cart[existingItem].amount += count;
      } else {
        // initialize product in cart and add amount property
        this.cart.push({ ...product, amount: count });
      }
    },
  },
});
