<template>
  <section class="slider-card-wrapper p-3 bg-[#f5f8ff] rounded-[20px]">
    <div
      class="img-box overflow-hidden relative rounded-[20px] mb-[16px] main-img"
      :class="props?.imgSize"
    >
      <img class="cover" src="../../assets//img//facts.jpeg" alt="backgorund" />
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
