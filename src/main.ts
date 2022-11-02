import { createApp } from "vue";
import "./style.css";

import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import App from "./App.vue";

createApp(App).use(createVuetify()).mount("#app");
