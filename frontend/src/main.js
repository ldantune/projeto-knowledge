import "bootstrap/dist/css/bootstrap.min.css"; // Importando o CSS do Bootstrap
import "bootstrap-vue-3/dist/bootstrap-vue-3.css"; // Importando o CSS do BootstrapVue 3
import "font-awesome/css/font-awesome.css";
import VueGravatar from "vue3-gravatar";
import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import axios from "axios";

import store from "./config/store";
import router from "./config/router";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2FzIEQgQW50dW5lcyIsImVtYWlsIjoibGRhbnR1bmVAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTczMzE5MDQ1OSwiZXhwIjoxNzMzNDQ5NjU5fQ.fTYkMudReJKZfNKzDO9fF4vpzG9iuTavP1FBgOgeumE";

// Configura o header global de autenticação somente se o token existir
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const app = createApp(App);
app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.use(VueGravatar).mount("#app");
