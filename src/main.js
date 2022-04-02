import { createApp } from "vue";
import App from "./App.vue";

// Feather Icons
import VueFeather from "vue-feather";

//Vue Router
import router from "./router";

// Import the styles
import "./styles/styles.scss";

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.use(router);
app.mount("#app");
