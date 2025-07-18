<template>
  <div class="game-container" :style="themeStyles">
    <!-- TopBar 元件 -->
    <TopBar
      :category-names="categoryNames"
      :active-tab="activeTab"
      @select-tab="selectTab"
      @clear-outfit="clearOutfit"
      @save-outfit="saveOutfit"
    />
    <main class="main-content flex-col md:flex-row">
      <!-- 角色面板元件 -->
      <CharacterPanel
        :model="currentModel"
        :layers="activeLayers"
        @switch-model="switchModel"
      />

      <!-- 服装选择器元件 -->
      <ClothingSelector
        :clothing-data="clothingData"
        :active-tab="activeTab"
        :current-outfit="currentOutfit"
        @select-item="selectItem"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import html2canvas from "html2canvas";
import TopBar from "../components/TopBar.vue";
import CharacterPanel from "../components/CharacterPanel.vue";
import ClothingSelector from "../components/ClothingSelector.vue";
import { models, clothingData, categoryNames } from "../assets/database.js";

// --- 响应式状态定义 ---
const currentModelIndex = ref(0);
const currentOutfit = ref({});
const activeTab = ref("accessory"); // 预设显示

// --- 计算属性 ---
const currentModel = computed(() => models[currentModelIndex.value]);

//--- 主题---
const themeStyles = computed(() => {
  if (!currentModel.value.theme) {
    return {};
  }
  return currentModel.value.theme;
});

// --- 更换body颜色的watch监视器 ---
watch(
  currentModel,
  (newModel) => {
    // 获取模特主题色
    const theme = newModel.theme || {};
    // 获取设定的 body 背景色，如果沒有则用预设
    const bodyBgColor = theme["--body-bg"] || "#f3f1f9";

    // 直接操作根元素 <html> 设定 CSS
    document.documentElement.style.setProperty("--body-bg", bodyBgColor);
  },
  {
    // 确保在元件第一次载入时也执行一次
    immediate: true,
  }
);

//--- 选中衣服转化为图层 ---
const activeLayers = computed(() => {
  return Object.keys(currentOutfit.value) //获得key组成序列，序列每个元素是type
    .map((type) => {
      const itemId = currentOutfit.value[type]; //物品id
      if (!itemId) return null;
      return clothingData[type]?.find((item) => item.id === itemId);
    })
    .filter(Boolean); //清理无效值
});

// --- 方法 ---

// ---  selectTab 方法 ---
function selectTab(tabName) {
  activeTab.value = tabName;
}
// 旧方法
// function switchModel(direction) {
//   const newIndex = currentModelIndex.value + direction;
//   if (newIndex >= models.length) {
//     currentModelIndex.value = 0;
//   } else if (newIndex < 0) {
//     currentModelIndex.value = models.length - 1;
//   } else {
//     currentModelIndex.value = newIndex;
//   }
//   currentOutfit.value = { ...currentModel.value.defaultOutfit };
// }

function switchModel(direction) {
  if (direction === "next") {
    currentModelIndex.value = (currentModelIndex.value + 1) % models.length;
  } else {
    // 確保索引不会变成负数
    currentModelIndex.value =
      (currentModelIndex.value - 1 + models.length) % models.length;
  }
  currentOutfit.value = { ...currentModel.value.defaultOutfit };
}

function selectItem({ type, id }) {
  // 此写法直接提取type和id属性值
  if (currentOutfit.value[type] === id) {
    currentOutfit.value[type] = null; //点击已选中则取消选中
  } else {
    currentOutfit.value[type] = id;
  }
}

function saveOutfit() {
  // 截图的目标元素
  const captureArea = document.querySelector("#character-capture-area");

  if (!captureArea) {
    console.log("找不到截图区域");
    return;
  }

  console.log("正在生成图片...");

  // 用html2canvas 进行截图
  html2canvas(captureArea, {
    useCORS: true, // 允许跨域图片
    backgroundColor: null, //透明背景
    scale: 3, // 更清晰的解析度
  })
    .then((canvas) => {
      //截图成功返回一個 <canvas> 元素  建立临时的 <a> 标签下载
      const link = document.createElement("a");

      // 将 canvas 转换成 PNG 图片链接，设定给 <a> 标签
      link.href = canvas.toDataURL("image/png");

      // 设定下载的档案名
      link.download = "personal outfit.png";

      // 临时把链接加入
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("图片已导出！");
    })
    .catch((err) => {
      console.error("图片导出失败:", err);
    });
}

function clearOutfit() {
  // 使用模特的 defaultOutfit
  currentOutfit.value = { ...currentModel.value.defaultOutfit };
  console.log("已重置");
}

function loadOutfit() {
  currentOutfit.value = { ...currentModel.value.defaultOutfit };
}

// --- 生命周期 ---
//要在元件挂载完才执行
onMounted(() => {
  loadOutfit();
});
</script>

<style scoped>
.game-container {
  @apply overflow-hidden;
}
</style>
