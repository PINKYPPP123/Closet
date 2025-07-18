import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //
import "./style.css";

// 建立实例赋值给 app
const app = createApp(App);

// 让app使用路由
app.use(router);

// app挂载在页面
app.mount("#app");
