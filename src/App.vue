<template>
  <div
    class="w-full h-full flex items-center justify-center relative box-border"
  >
    <!-- 左箭头 -->
    <button
      @click="switchScene('prev')"
      class="nav-arrow left-1 md:left-16"
      title="上个场景"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <!-- <div class="w-full h-full max-w-5xl max-h-[768px]">
       旧方法：无router时，用 v-if 和 v-else 切换场景 
       
      <DessertView v-if="currentView === 'dessert'" />
      <WebcoreView v-else-if="currentView === 'webcore'" />
    </div> -->

    <!-- 允许app.vue获取数据，Component是Vue router 自动生成对象，包含当前route对应组件 -->
    <router-view v-slot="{ Component }">
      <transition name="fade-in" mode="out-in">
        <!-- 动态组件渲染器 -->
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- 右箭头 -->
    <button
      @click="switchScene('next')"
      class="nav-arrow right-1 md:right-16"
      title="下个场景"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </div>

  <!-- 页脚 -->
  <footer
    class="relative bottom-3 flex pt-4 text-gray-500 text-md justify-center"
  >
    <p class="project-name">
      Closet |
      <router-link
        to="/about"
        class="about-link underline inline-block transition-transform hover:scale-110"
        >About</router-link
      >
    </p>
  </footer>
</template>

<script setup>
import { computed } from "vue";
// 导入vue-router的工具
import { useRouter, useRoute } from "vue-router";

// 获取router实例
const router = useRouter();
// 获取当前route，得知route.path
const route = useRoute();
// 定义所有场景路径
const scenePaths = ["/", "/webcore"];

// 计算出当前路径的索引，响应式都用computed，变更时可以重新自动运行
const currentSceneIndex = computed(() => {
  return scenePaths.indexOf(route.path);
});

// 切换场景方法
function switchScene(direction) {
  let nextIndex; //声明变量
  if (direction === "next") {
    nextIndex = (currentSceneIndex.value + 1) % scenePaths.length;
  } else {
    nextIndex =
      (currentSceneIndex.value - 1 + scenePaths.length) % scenePaths.length;
  }

  // 获取下一场景路径
  const nextPath = scenePaths[nextIndex];

  // 跳转到新路径
  router.push(nextPath);
}
</script>

<style>
.nav-arrow {
  @apply absolute top-1/2 -translate-y-1/2 text-gray-400 bg-white/50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 ease-in-out backdrop-blur-sm;
}
.nav-arrow:hover {
  @apply text-gray-800 bg-white/80 scale-110;
}
</style>
