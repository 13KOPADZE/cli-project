<template>
  <div class="main-wrapper flex flex-col mobile:gap-4 tablet:gap-10">
    <HeaderComponent />
    <div class="container flex gap-8">
      <div class="content-left w-full flex flex-col mobile:gap-6 tablet:gap-8">
        <MainSlider />
        <div
          class="mobile:gap-6 mobile:flex mobile:flex-col tablet:gap-8 laptop:hidden"
        >
          <NewsList :title="`ყველა სიახლე`" :showImg="false" />
          <NewsList :title="`პოპულარული`" :showImg="true" />
        </div>
        <FactsSlider />
        <NewsShuffle />
      </div>
      <div class="content-right flex flex-col gap-8">
        <NewsList :title="`ყველა სიახლე`" :showImg="false" />
        <NewsList :title="`პოპულარული`" :showImg="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsList from "../src/components/NewsList.vue";
import NewsShuffle from "./components/NewsShuffle.vue";
import MainSlider from "../src/components/mainSlider.vue";
import FactsSlider from "../src/components/FactsSlider.vue";
import HeaderComponent from "../src/components/layouts/HeaderComponent.vue";
</script>

<style scoped>
.content-left {
  max-width: 70%;
}
.content-right {
  max-width: 100%;
}

@media (max-width: 1239px) {
  .content-left {
    max-width: 100%;
  }
  .content-right {
    display: none;
  }
}
</style>
