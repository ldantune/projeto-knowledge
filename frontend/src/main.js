import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"; // Importando o CSS do BootstrapVue 3
import "font-awesome/css/font-awesome.css";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";
import VueGravatar from "vue3-gravatar";
import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import axios from "axios";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import store from "./config/store";
import router from "./config/router";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2FzIEQgQW50dW5lcyIsImVtYWlsIjoibGRhbnR1bmVAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTczMzQxODMyOSwiZXhwIjoxNzMzNjc3NTI5fQ.lTtp8nmVPwpu6wsnQvggPxjl0AZTTgyr2CzHxHXnNcU";

// Configura o header global de autenticação somente se o token existir
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const options = {
  // You can set your default options here
};

const app = createApp(App);

app.use(store);
app.component("QuillEditor", QuillEditor);
app.use(Toast, options);
app.use(router);
app.use(BootstrapVue3);
app.use(VueGravatar);
app.mount("#app");
