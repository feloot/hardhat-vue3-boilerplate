import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

declare global {
  interface Window {
      // eslint-disable-next-line
      ethereum: any // Add ethereum type
  }
}

createApp(App).use(store).use(router).mount("#app");
