<template>
  <div class="selector-container">
    <div class="scrollable-area">
      <div class="items-wrapper">
        <!-- 遍历items，为每个衣服建一个格子 -->
        <div
          v-for="item in clothingData[activeTab]"
          :key="item.id"
          @click="selectItem(activeTab, item.id)"
          class="item"
          :class="{ active: currentOutfit[activeTab] === item.id }"
        >
          <img :src="item.svg" :alt="item.name" class="item-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  clothingData: Object,
  activeTab: String,
  currentOutfit: Object,
});

const emit = defineEmits(["selectItem"]);

function selectItem(type, id) {
  emit("selectItem", { type, id });
}
</script>

<style scoped>
/* 滑动区域 */
.selector-container {
  @apply flex-grow  rounded-xl md:px-6 md:pt-5 md:pb-8  overflow-hidden;
}
.scrollable-area {
  @apply w-full h-full overflow-x-auto;
}
/* 滚轮 */
.scrollable-area::-webkit-scrollbar {
  height: 8px;
}
.scrollable-area::-webkit-scrollbar-track {
  background: var(--theme-scrollbar-track);
  border-radius: 10px;
}
.scrollable-area::-webkit-scrollbar-thumb {
  background: var(--theme-scrollbar-thumb);
  border-radius: 10px;
}
.scrollable-area::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
.items-wrapper {
  @apply inline-grid grid-flow-col auto-cols-max; /* 使用 inline-grid 让宽度由内容决定 */
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  height: 100%;
  grid-template-rows: 1fr;
  @media (min-width: 768px) {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
}
.item {
  @apply h-28 w-20  mt-2 ml-[5px]  rounded-lg p-2 border-2 border-gray-200 cursor-pointer transition-all duration-200 flex-shrink-0;
  background: var(--theme-items);
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.item:hover {
  @apply transform -translate-y-1;
  background: var(--theme-selected);
}
.item.active {
  background: var(--theme-selected);
  box-shadow: 0 0 0 2px var(--theme-primary-shadow);
}
.item-img {
  @apply w-full h-full object-contain;
}
</style>
