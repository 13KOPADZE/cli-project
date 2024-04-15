<template>
  <div class="relative">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in 13" :key="index">
        <MainSliderCard />
      </swiper-slide>
    </swiper>
    <div
      class="swiper-navigation-button flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full white swiper-prev"
    >
      <SVGComponent name="arrow-left" />
    </div>

    <div
      class="swiper-navigation-button flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full white swiper-next"
    >
      <SVGComponent name="arrow-right" />
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainSliderCard from "./cards/MainSliderCard.vue";
import SVGComponent from "../components/partials/SVGComponent.vue";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    MainSliderCard,
    SVGComponent,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style>
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  top: 380px;
}
.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  background: #fff;
  transition: 0.3s ease-in-out;
}
.swiper-pagination-bullet-active {
  width: 24px;
  height: 8px;
  border-radius: 5px;
}
@media (max-width: 1023px) {
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    top: 240px;
  }
}
</style>

<style scoped>
.swiper-navigation-button {
  top: 203px;
  z-index: 2;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
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
@media (max-width: 1023px) {
  .swiper-navigation-button {
    top: 145px;
  }
  .swiper-prev {
    left: 20px;
  }
  .swiper-next {
    right: 20px;
  }
}
</style>
