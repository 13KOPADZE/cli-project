<template>
  <div
    class="search-wrapper mobile:w-12 mobile:h-12 tablet:h-12 tablet:w-full relative bg-[#F5F8FF] rounded-full"
  >
    <input
      class="w-full mobile:hidden tablet:block bg-transparent h-full rounded-full ease-in-out duration-200"
      placeholder="ძებნა"
      v-bind="searchValue"
      type="text"
    />
    <SVGComponent class="search-icon" name="search" />
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import SVGComponent from "./SVGComponent.vue";
const searchValue = ref(null);
</script>

<style scoped>
.search-wrapper {
  max-width: 224px;
}
input {
  outline: none;
  font-size: 14px;
  padding: 14px 40px 14px 16px;
  border: 2px solid transparent;
}
input:focus {
  border: 2px solid #585ee3;
}
.search-icon {
  top: 50%;
  right: 12px;
  cursor: pointer;
  position: absolute;
  transform: translateY(-50%);
}
@media (max-width: 1024px) {
  .search-icon {
    left: 50%;
    right: 0%;
    width: fit-content;
    transform: translate(-50%, -50%);
  }
}
</style>
