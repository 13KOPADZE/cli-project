<template>
  <section class="slider-card-wrapper p-3 bg-[#ffffff] rounded-[20px]">
    <div
      class="img-box overflow-hidden relative rounded-[20px] mb-[16px] main-img"
      :class="props?.imgSize"
    >
      <img
        class="cover"
        src="../../assets//img//shuffle-2.jpeg"
        alt="backgorund"
      />
    </div>
    <div class="flex items-center gap-1 mb-2">
      <div
        class="text-[#657178] bg-[#F5F8FF] rounded-[16px] text-small px-2 py-1.5 ease-in-out duration-300"
      >
        12.08.2023
      </div>
      <div
        class="text-[#657178] bg-[#F5F8FF] rounded-[16px] text-small px-2 py-1.5 ease-in-out duration-300"
      >
        პოლიტიკა
      </div>
    </div>
    <p class="text-medium text-[#1D2D35]">
      {{ props?.cardText ? props?.cardText : "ქვემო ქართლის რეგიონში 20 მლნ" }}
    </p>
  </section>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  imgSize: String,
  cardText: String,
});
</script>
<style scoped>
.img-box {
  height: 120px;
}
.img-box.double {
  height: 264px;
}
</style>
