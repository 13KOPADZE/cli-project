<template>
  <section class="news-list-main-wrapper pt-6 px-4 bg-[#ffffff] rounded-[20px]">
    <h3 class="heading-2 mb-6">{{ props.title }}</h3>
    <div
      class="news-list-content-wrapper overflow-y-auto mobile:max-h-[230px] laptop:max-h-[515px] flex flex-col gap-4"
    >
      <template v-if="!props.showImg">
        <NewsCard v-for="item in newsItems" :key="item.id" />
      </template>
      <template v-else-if="props.showImg">
        <NewsCardImg v-for="item in newsItems" :key="item.id" />
      </template>
    </div>
  </section>
</template>

<script setup>
import { defineProps } from "vue";
import NewsCard from "./cards/NewsCard.vue";
import NewsCardImg from "./cards/NewsCardImg.vue";

const props = defineProps({
  title: String,
  showImg: Boolean,
});
const newsItems = Array.from({ length: 10 }, (_, i) => ({ id: i }));
</script>
