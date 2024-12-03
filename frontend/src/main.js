import "bootstrap/dist/css/bootstrap.min.css"; // Importando o CSS do Bootstrap
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"; // Importando o CSS do BootstrapVue 3
import "font-awesome/css/font-awesome.css";
import VueGravatar from "vue3-gravatar";
import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue3 } from "bootstrap-vue-3";

import store from "./config/store";

const app = createApp(App);
app.use(store);
app.use(BootstrapVue3);
app.use(VueGravatar).mount("#app");
