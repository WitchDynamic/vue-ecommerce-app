import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { createApp, use } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

// Make BootstrapVue available throughout project
use(BootstrapVue);
use(IconsPlugin);

app.use(createPinia());

app.mount("#app");
