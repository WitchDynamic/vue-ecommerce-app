import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
watch(
  pinia.state,
  (state) => {
    // state.cart.cart accesses only the cart array within the state excluding products
    localStorage.setItem("cart", JSON.stringify(state.cart.cart));
  },
  { deep: true }
);

app.use(pinia);

app.mount("#app");
