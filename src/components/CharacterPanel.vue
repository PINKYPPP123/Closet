<template>
  <div class="character-panel">
    <!-- 角色展示区 -->
    <div class="character-display" id="character-capture-area">
      <!-- transition监听 key，模特ID改变时触发淡入淡出-->
      <transition name="fade-in" mode="out-in">
        <!--  wrapper 包含了所有需要同步动画的元素 -->
        <div :key="model.id" class="character-content-wrapper">
          <div v-if="model.background" class="model-background">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                class="background-shape"
                width="100%"
                height="100%"
                rx="10"
              />
            </svg>
          </div>

          <img
            :key="model.id"
            :src="model.svg"
            :alt="model.name"
            class="model-img"
          />

          <div class="layers-container">
            <transition-group name="fade-in">
              <img
                v-for="layer in layers"
                :key="layer.id"
                :src="layer.svg"
                :alt="layer.name"
                class="layer-img"
                :style="{ zIndex: layer.zIndex }"
              />
            </transition-group>
          </div>
        </div>
      </transition>
    </div>

    <!-- 模特切换器 -->
    <div class="model-switcher">
      <!-- 箭头图示 -->
      <button @click="$emit('switchModel', prev)" class="arrow-btn">
        <svg
          class="arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <polygon points="11 19 2 12 11 5 11 19" />
          <polygon points="22 19 13 12 22 5 22 19" />
        </svg>
      </button>
      <!-- {{}}}文本插值，自动更新 -->
      <span class="model-name">{{ model.name }}</span>

      <button @click="$emit('switchModel', next)" class="arrow-btn">
        <svg
          class="arrow-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2.5"
        >
          <polygon points="13 19 22 12 13 5 13 19" />
          <polygon points="2 19 11 12 2 5 2 19" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
// 此元件接收的属性 (props)
defineProps({
  model: {
    type: Object,
    required: true,
  },
  layers: {
    type: Array,
    required: true,
  },
});

// 此元件可以发出的事件 (emits)
defineEmits(["switchModel"]);
</script>

<style scoped>
.character-panel {
  @apply md:border-r-4 md:pr-4;
  flex-basis: 45%; /* 控制此元件在父容器中的宽度占比 */
}
.character-display {
  @apply relative   mt-6 rounded-xl w-full h-full max-h-[400px] max-w-[250px] aspect-[3/5];
}
.character-content-wrapper {
  @apply relative w-full h-full;
}
.model-background {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
  @apply w-full h-[90%] object-cover; /* 与父容器的比例 */

  z-index: 0; /*  z-index 最低 */
}
.background-shape {
  fill: var(--theme-bg-lighter2);
}
.model-img {
  @apply absolute top-0 left-0 w-full h-full relative;
}
.layers-container {
  @apply absolute top-0 left-0 w-full h-full;
}
.layer-img {
  @apply absolute top-0 left-0 w-full h-full pointer-events-none;
  /* pointer-events-none:让鼠标穿透 */
}
.model-switcher {
  @apply flex  justify-center gap-12 w-full p-2 pr-4 rounded-full;
}
.model-name {
  @apply font-bold  text-lg;
  color: var(--theme-secondary-darker);
}

.arrow-btn {
  @apply transition-colors;

  color: var(--theme-secondary);
}

.arrow-btn:hover {
  color: var(--theme-secondary-darker);
}
.arrow-icon {
  @apply w-[30px] h-[30px];
}
</style>
