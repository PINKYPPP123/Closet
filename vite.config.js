import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ command }) => {
  const base = command === "build" ? "/Closet/" : "/";

  return {
    base: base, // 动态设置base
    build: {
      sourcemap: false,
    },
    plugins: [
      vue(),
      VitePWA({
        registerType: "autoUpdate",
        base: base,
        manifest: {
          name: "Closet",
          short_name: "Closet",
          description: "@PP 个人制作的换装游戏",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          icons: [
            {
              src: "pwa-192x192.PNG",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.PNG",
              sizes: "512x512",
              type: "image/png",
            },
          ],
          screenshots: [
            {
              src: "screenshot-desktop.png", //图片路径
              sizes: "1920x1080", // 尺寸保持一致
              type: "image/png",
              form_factor: "wide", // 宽屏幕
              label: "桌面版",
            },
            {
              src: "screenshot-mobile.png",
              sizes: "630x1228",
              type: "image/png",
              form_factor: "narrow",
              label: "手机版",
            },
          ],
        },
      }),
    ],
  };
});
