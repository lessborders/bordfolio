import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router";
import { store } from "./store";
import { createMetaManager } from 'vue-meta'

import "./darkToggle";

import Header from "./components/Header.vue";
import darkToggle from "./components/darkToggle.vue";
import productDropdown from "./components/productDropdown.vue";

import App from "./App.vue";

import './assets/scss/styles.scss';
import "bootstrap";

const app = createApp(App);

// global registration - can be used anywhere
app.component("Header", Header);
app.component("darkToggle", darkToggle);
app.component("productDropdown", productDropdown); 

app.use(createStore(store));
app.use(router);
app.use(createMetaManager());

app.mount("#app");