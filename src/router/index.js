import { createRouter, createWebHistory } from "vue-router";
// 导入作为界面的元件
import DessertView from "../views/DessertView.vue";
import WebcoreView from "../views/WebcoreView.vue";
import AboutView from "../views/AboutView.vue";

// 定义路由规则
const routes = [
  {
    path: "/", // 根路径
    name: "Dessert",
    component: DessertView, // 换装游戏主界面
  },
  {
    path: "/about", // about 路径
    name: "About",
    component: AboutView,
  },
  {
    path: "/webcore",
    name: "webcore",
    component: WebcoreView,
    meta: {
      bodyBackgroundColor: "#ffffff",
    },
  },
];

// 路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 使用 HTML5 History 模式
  routes, // 规则传入
});

// 导出路由实例，在 main.js 中使用
export default router;
