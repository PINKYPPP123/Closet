<template>
  <header class="top-bar">
    <!-- 左侧按钮 -->
    <div class="action-buttons">
      <button
        @click="$emit('clearOutfit')"
        class="icon-btn"
        title="重置"
        id="icon-reset"
      >
        <svg
          class="action-buttons-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path
            d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
          ></path>
        </svg>
      </button>
      <button
        @click="$emit('saveOutfit')"
        class="icon-btn"
        title="保存"
        id="icon-save"
      >
        <svg
          class="action-buttons-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
          />
          <polyline points="17 21 17 13 7 13 7 21" />
          <polyline points="7 3 7 8 15 8" />
        </svg>
      </button>
      <div>
        <button
          @click="toggleMusic"
          class="icon-btn"
          title="音乐"
          id="icon-music"
        >
          <svg
            class="action-buttons-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        </button>
        <!-- 播放器-->
        <audio ref="audioPlayer" src="/background-music.mp3" loop></audio>
      </div>
    </div>
    <!-- 类别标签 -->
    <div class="category-tabs">
      <button
        v-for="(name, type) in categoryNames"
        :key="type"
        @click="$emit('selectTab', type)"
        class="tab-btn"
        :class="{ active: activeTab === type }"
        :title="name"
      >
        <svg
          class="tab-icon"
          v-if="type === 'accessory'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="6" cy="15" r="4" />
          <circle cx="18" cy="15" r="4" />
          <path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
          <path d="M2.5 13L5 7" />
          <path d="M21.5 13L19 7" />
        </svg>
        <svg
          class="tab-icon"
          v-if="type === 'top'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            d="M15 4l6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 0 0 6 0Z"
          />
        </svg>
        <svg
          class="tab-icon"
          v-if="type === 'bottom'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            d="M 4,4 L 20,4 L 21,21 L 15,21 L 12,11 L 9,21 L 3,21 L 4,4 Z"
          />
        </svg>
        <svg
          class="tab-icon"
          v-if="type === 'shoes'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            d="M 7,4 L 17,4 L 15,17 L 19,17 A 2,2 0 0 1 19,21 L 9,21 L 9,17 Z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

//建立 ref 获取 <audio> 元素
const audioPlayer = ref(null);

// 建立 ref 追踪播放状态
const isPlaying = ref(false);

// 建立切换播放/暂停的方法
function toggleMusic() {
  if (isPlaying.value) {
    // 如果正在播放，就暂停
    audioPlayer.value.pause();
  } else {
    // 如果已暂停，就播放
    audioPlayer.value.play();
  }
  // 更新播放状态
  isPlaying.value = !isPlaying.value;
}

defineProps({
  categoryNames: Object,
  activeTab: String,
});
defineEmits(["selectTab", "clearOutfit", "saveOutfit"]);
</script>

<style scoped>
.top-bar {
  @apply flex items-stretch justify-between px-3 pt-1 pb-0  rounded-t-xl flex-shrink-0;
  background-color: var(--theme-bg);
  border-color: var(--theme-bg);
}
.action-buttons {
  @apply flex items-center md:gap-2;
}
.category-tabs {
  @apply flex items-stretch;
}
.icon-btn {
  @apply p-2  rounded-full  text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors  text-sm md:text-base;
  background-color: var(--theme-icon);
}
#icon-reset {
  @apply hover:bg-gray-200 hover:text-gray-800 transition-colors;
  background-color: var(--theme-reset);
  color: var(--theme-bg);
}
#icon-music {
  @apply bg-white  transition-colors;
  color: var(--theme-icon-text);
}
#icon-music :hover {
  color: var(--theme-primary-darker);
}
.action-buttons-icon {
  @apply w-[18px] h-[18px] md:w-[22px] md:h-[22px];
}
.tab-btn {
  @apply p-1  flex  items-center rounded-lg rounded-b-none  transition-all duration-200 border-t-4 border-x-4 md:p-3 md:px-6;
  color: var(--theme-primary-darker2);
  border-color: var(--theme-primary);
}
.tab-btn:hover {
  background-color: var(--theme-bg-lighter);
}
.tab-btn.active {
  @apply bg-white;
}
.tab-icon {
  @apply w-[35px] h-[35px] md:w-[40px] md:h-[40px];
}
</style>
