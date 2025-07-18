<template>
  <div class="about-container">
    <h1 class="flex inline-block text-gray-400 text-4xl text-center pt-5">
      Closet | @PP
    </h1>
    <main
      class="w-3/4 h-1/2 gap-3 inline-block text-gray-700 text-sm md:text-base lg:text-lg"
    >
      <p class="text-left py-3 break-words">
        还有很多功能没有做完，这目前是一个半成品！起因是和朋友口嗨，感觉做一个简单的换装小游戏静态网站应该挺快的，就突然开发了，用了很多新学到的技术（元谋人用上了纺织机）
        要画的地方意外的好多啊,<strong>累死我了！！</strong>所以大部分我画的地方精度都挺糊弄的，意思到了就行（呵呵）
      </p>
      <div class="flex items-center my-6">
        <hr class="flex-grow border-2 border-gray-300" />
        <span class="px-4 text-gray-4=500">特别感谢</span>
        <hr class="flex-grow border-2 border-gray-300" />
      </div>

      <ul class="text-left pt-3 pb-8 text-gray-500">
        <li>
          <p>
            <strong>沭沭：</strong>
            帮我画了好多套衣服，真是又快又好，感恩
          </p>
        </li>
        <li>
          <p>
            <strong>廻：</strong>
            给乔乔设计了超萌的一套冬装，赚了
          </p>
        </li>
      </ul>
      <router-link
        to="/"
        class="about-link underline inline-block transition-transform hover:scale-110"
        >返回</router-link
      >
    </main>
  </div>
</template>

<style scoped>
.about-container {
  @apply flex flex-col  p-2 gap-4 items-center max-w-[820px] border-8 border-gray-300 bg-white text-center;
  color: rgb(51, 51, 51);
  margin: auto;
  border-radius: 1.5rem;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  margin-top: 3%;
  backdrop-filter: blur(8px);
}
.about-container a {
  color: #c9ccd7;
  text-decoration: underline;
}
</style>
