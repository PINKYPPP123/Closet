export const models = [
  {
    id: "model-a",
    name: "Joe",
    svg: "${BASE_URL}/IMG_1.GIF",
    background: true,
    theme: {
      "--theme-bg": "#c1c1c6", //灰色
      "--theme-bg-lighter": "#dcdcde",
      "--theme-bg-lighter2": "#ededef",
      "--theme-primary": "#aaabdb", //紫色
      "--theme-primary-darker": "#9393d7", //深色
      "--theme-primary-darker2": "#8f8fbf", //更深
      "--theme-items": "#d2d2f4",
      "--theme-selected": "#aaabdb",
      "--theme-scrollbar-track": "#d2d2f4",
      "--theme-scrollbar-thumb": "#e7e2f7",
      "--theme-secondary": "#c1c1c6", //切换
      "--theme-secondary-darker": "#7d7d8f",
      "--theme-icon": "#aaabdb",
      "--theme-reset": "#565656",
      "--theme-icon-text": "#c1c1c6",
      "--theme-primary-shadow": "rgba(15, 15, 221, 0.3)",
      "--body-bg": "#f3f1f9", //#f1f9f9,
    },
    defaultOutfit: {
      accessory: "acc-3",
      top: "top-3",
      bottom: "bottom-4",
      shoes: "shoes-1",
    },
  },
  {
    id: "model-b",
    name: "Sea Salt ",
    svg: "${BASE_URL}/IMG_2.GIF",
    background: true,
    theme: {
      "--theme-bg": "#bbfbf8", //海盐

      "--theme-bg-lighter": "#d1f0f8",
      "--theme-bg-lighter2": "#d1f0f8",
      "--theme-primary": "#866d62", //巧克力
      "--theme-primary-darker": "#594a49", //深色
      "--theme-primary-darker2": "#594a49", //更深
      "--theme-items": "#bbfbf8",
      "--theme-selected": "#866d62",
      "--theme-scrollbar-track": "#d1f0f8",
      "--theme-scrollbar-thumb": "#866d62",
      "--theme-secondary": "#594a49", //切换 巧克力色
      "--theme-secondary-darker": "#866d62",
      "--theme-icon": "#ffbac0", //粉红
      "--theme-reset": "#866d62",
      "--theme-icon-text": "#866d62",
      "--theme-primary-shadow": "rgba(129, 76, 21, 0.3)",
      "--body-bg": "#f1f9f9",
    },
    defaultOutfit: {
      accessory: "acc-5",
      bottom: "bottom-9",
      shoes: "shoes-7",
    },
    //  {
    //   "--theme-bg": "#b8ffe8", //薄荷
    //   "--theme-bg-lighter": "#cdf2ef",
    //   "--theme-bg-lighter2": "#cdf2ef",
    //   "--theme-primary": "#896b69", //巧克力
    //   "--theme-primary-darker": "#594a49", //深色
    //   "--theme-primary-darker2": "#594a49", //更深
    //   "--theme-items": "#b8ffe8",
    //   "--theme-selected": "#896b69",
    //   "--theme-scrollbar-track": "#cdf2ef",
    //   "--theme-scrollbar-thumb": "#896b69",
    //   "--theme-secondary": "#594a49", //切换 巧克力色
    //   "--theme-secondary-darker": "#896b69",
    //   "--theme-icon": "#ffbac0", //粉红
    //   "--theme-reset": "#896b69",
    //   "--theme-icon-text": "#896b69",
    //   "--theme-primary-shadow": "rgba(129, 76, 21, 0.3)",
    // },
  },
];

export const clothingData = {
  accessory: [
    {
      id: "acc-1",
      name: "眼镜",
      svg: "${BASE_URL}/Accessory/IMG_1.PNG",
    },
    {
      id: "acc-2",
      name: "发带",
      svg: "${BASE_URL}/Accessory/IMG_2.PNG",
    },
    {
      id: "acc-3",
      name: "围巾",
      svg: "${BASE_URL}/Accessory/IMG_3.PNG",
      zIndex: 5,
    },
    {
      id: "acc-4",
      name: "发夹",
      svg: "${BASE_URL}/Accessory/IMG_4.PNG",
    },
    {
      id: "acc-5",
      name: "糖霜",
      svg: "${BASE_URL}/Accessory/IMG_5.PNG",
    },
    {
      id: "acc-6",
      name: "帽子",
      svg: "${BASE_URL}/Accessory/IMG_6.PNG",
    },
    {
      id: "acc-7",
      name: "薄巧头绳",
      svg: "${BASE_URL}/Accessory/IMG_7.PNG",
    },
    {
      id: "acc-8",
      name: "小熊头饰",
      svg: "${BASE_URL}/Accessory/IMG_8.PNG",
    },
  ],
  top: [
    {
      id: "top-1",
      name: "白色polo衫",
      svg: "${BASE_URL}/Top/IMG_1.PNG",
      zIndex: 2,
    },
    {
      id: "top-2",
      name: "卫衣",
      svg: "${BASE_URL}/Top/IMG_2.PNG",
      zIndex: 2,
    },
    {
      id: "top-3",
      name: "白色毛衣",
      svg: "${BASE_URL}/Top/IMG_3.PNG",
      zIndex: 4,
    },
    {
      id: "top-4",
      name: "袖套",
      svg: "${BASE_URL}/Top/IMG_4.PNG",
    },
    {
      id: "top-5",
      name: "背心马甲",
      svg: "${BASE_URL}/Top/IMG_5.PNG",
      zIndex: 4,
    },
    {
      id: "top-6",
      name: "薄巧毛衣",
      svg: "${BASE_URL}/Top/IMG_6.PNG",
      zIndex: 4,
    },
    {
      id: "top-7",
      name: "袖套学园上衣",
      svg: "${BASE_URL}/Top/IMG_7.PNG",
      zIndex: 4,
    },
  ],
  bottom: [
    {
      id: "bottom-1",
      name: "白色短裤",
      svg: "${BASE_URL}/Bottom/IMG_1.PNG",
      zIndex: 1,
    },
    {
      id: "bottom-2",
      name: "黑色9分裤",
      svg: "${BASE_URL}/Bottom/IMG_2.PNG",
      zIndex: 1,
    },
    {
      id: "bottom-3",
      name: "黑色短裤",
      svg: "${BASE_URL}/Bottom/IMG_3.PNG",
      zIndex: 1,
    },
    {
      id: "bottom-4",
      name: "冬季短裤",
      svg: "${BASE_URL}/Bottom/IMG_4.PNG",
      zIndex: 1,
    },
    {
      id: "bottom-5",
      name: "短裤配打底",
      svg: "${BASE_URL}/Bottom/IMG_5.PNG",
      zIndex: 1,
    },
    {
      id: "bottom-6",
      name: "白色短裙",
      svg: "${BASE_URL}/Bottom/IMG_6.PNG",
      zIndex: 3,
    },
    {
      id: "bottom-7",
      name: "巧克力短裙",
      svg: "${BASE_URL}/Bottom/IMG_7.PNG",
      zIndex: 3,
    },
    {
      id: "bottom-8",
      name: "中裤",
      svg: "${BASE_URL}/Bottom/IMG_8.PNG",
      zIndex: 1,
    },
    {
      id: "bottom-9",
      name: "巧克力层叠裙",
      svg: "${BASE_URL}/Bottom/IMG_9.PNG",
      zIndex: 3,
    },
    {
      id: "bottom-10",
      name: "薄巧层叠裙",
      svg: "${BASE_URL}/Bottom/IMG_10.PNG",
      zIndex: 3,
    },
  ],
  shoes: [
    {
      id: "shoes-1",
      name: "白鞋",
      svg: "${BASE_URL}/Shoes/IMG_1.PNG",
      zIndex: 2,
    },
    {
      id: "shoes-2",
      name: "运动鞋",
      svg: "${BASE_URL}/Shoes/IMG_2.PNG",
    },
    {
      id: "shoes-3",
      name: "冬靴",
      svg: "${BASE_URL}/Shoes/IMG_3.PNG",
    },
    {
      id: "shoes-4",
      name: "异色小皮鞋",
      svg: "${BASE_URL}/Shoes/IMG_4.PNG",
    },
    {
      id: "shoes-5",
      name: "小皮鞋",
      svg: "${BASE_URL}/Shoes/IMG_5.PNG",
    },
    {
      id: "shoes-6",
      name: "泡泡袜乐福鞋",
      svg: "${BASE_URL}/Shoes/IMG_6.PNG",
      zIndex: 2,
    },
    {
      id: "shoes-7",
      name: "海盐乐福鞋",
      svg: "${BASE_URL}/Shoes/IMG_7.PNG",
    },
    {
      id: "shoes-8",
      name: "棕色乐福鞋",
      svg: "${BASE_URL}/Shoes/IMG_8.PNG",
    },
    {
      id: "shoes-9",
      name: "薄巧小皮鞋",
      svg: "${BASE_URL}/Shoes/IMG_9.PNG",
      zIndex: 2,
    },
    {
      id: "shoes-10",
      name: "包袜乐福鞋",
      svg: "${BASE_URL}/Shoes/IMG_10.PNG",
      zIndex: 3,
    },
  ],
};

export const categoryNames = {
  accessory: "饰品",
  top: "上裝",
  bottom: "下裝",
  shoes: "鞋子",
};
