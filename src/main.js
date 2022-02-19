import { createApp } from "vue";
import { createStore } from "vuex";
import { router } from "./router";
import { store } from "./store";

import "./darkToggle";

import navBar from "./components/navBar.vue";
import darkToggle from "./components/darkToggle.vue";

import App from "./App.vue";

import './assets/scss/styles.scss';
import "bootstrap";

const app = createApp(App);

app.component("navBar", navBar); // global registration - can be used anywhere
app.component("darkToggle", darkToggle); // global registration - can be used anywhere

app.use(createStore(store));
app.use(router);

app.mount("#app");