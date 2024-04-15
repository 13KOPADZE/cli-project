<template>
  <div class="relative p-6 bg-[#FFFFFF] rounded-[20px] h-fit">
    <div class="facts-slider-header flex items-center justify-between mb-4">
      <p class="text-[#1D2D35] text-medium">ცნობილი ფაქტები</p>
      <div class="flex items-center gap-4">
        <div
          class="swiper-navigation-button flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full white facts-swiper-prev"
        >
          <SVGComponent name="arrow-left" />
        </div>
        <div
          class="swiper-navigation-button flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full white facts-swiper-next"
        >
          <SVGComponent name="arrow-right" />
        </div>
      </div>
    </div>
    <swiper
      :modules="modules"
      :slides-per-view="isUnder1024 ? 1.1 : 2.7"
      :space-between="22"
      :navigation="{
        nextEl: '.facts-swiper-next',
        prevEl: '.facts-swiper-prev',
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in 13" :key="index">
        <FactsCard />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SVGComponent from "../components/partials/SVGComponent.vue";
import FactsCard from "./cards/FactsCard.vue";
import { onMounted, onUnmounted, ref } from "vue";
export default {
  components: {
    Swiper,
    FactsCard,
    SwiperSlide,
    SVGComponent,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const isUnder1024 = ref(window.innerWidth < 1024);

    const updateWindowWidth = () => {
      isUnder1024.value = window.innerWidth < 1024;
    };

    onMounted(() => {
      window.addEventListener("resize", updateWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWindowWidth);
    });
    return {
      onSwiper,
      isUnder1024,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style scoped>
.swiper-navigation-button {
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
.swiper-button-disabled {
  opacity: 0.5;
}
.swiper-prev {
  left: 36px;
}
.swiper-next {
  right: 36px;
}
</style>
