<template>
  <header class="bg-[#ffffff]">
    <div
      class="container header-content flex items-center justify-between gap-4 py-8"
    >
      <SVGComponent class="logo relative pr-4" name="logo" />

      <div class="menu mobile:hidden laptop:flex" ref="menuContainer">
        <ul class="flex gap-8 items-center justify-between" id="menu_ul">
          <li
            class="text-nowrap text-[#657178] transition-all duration-200 cursor-pointer hover:text-[#585EE3]"
            v-for="(item, index) in visibleItems"
            :key="index"
          >
            {{ item }}
          </li>
          <li
            id="more"
            v-if="overflowItems.length"
            @click="toggleOverflow"
            class="relative"
          >
            <p
              :class="[
                showOverflow
                  ? 'gap-2 flex items-center cursor-pointer text-nowrap text-[#585EE3] transition-all duration-200'
                  : 'gap-2 flex items-center cursor-pointer text-nowrap text-[#657178] transition-all duration-200',
              ]"
            >
              სხვა
              <SVGComponent
                :class="[
                  showOverflow
                    ? 'rotate-180  transition-all duration-200 stoke'
                    : 'transition-all duration-200',
                ]"
                name="dropdown-arrow"
              />
            </p>

            <ul class="overflow dropdown-list" v-show="showOverflow">
              <li
                class="text-nowrap text-[#657178] transition-all duration-200 cursor-pointer hover:text-[#585EE3] px-5 py-4"
                v-for="(item, index) in overflowItems"
                :key="`overflow-${index}`"
              >
                {{ item }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <section class="header-info-section flex items-center gap-4">
        <div
          class="social-wrapper items-center gap-2 mobile:hidden tablet:flex"
        >
          <a
            href="#"
            class="social-element flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full"
          >
            <SVGComponent name="instagram" />
          </a>
          <a
            href="#"
            class="social-element flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full"
          >
            <SVGComponent name="facebook" />
          </a>
        </div>
        <SearchComp />
        <div
          @click="menuToggle"
          class="social-element flex laptop:hidden items-center justify-center bg-[#F5F8FF] min-w-8 min-h-8 tablet:w-8 tablet:h-8 mobile:w-12 mobile:h-12 rounded-full"
        >
          <SVGComponent name="menu-toggler" />
        </div>
      </section>
      <section
        :class="
          showMenu
            ? 'active opacity-1 transition-all visible pointer-events-auto duration-300 tablet-menu mobile:pb-6 tablet:pb-0 flex flex-col justify-between'
            : 'tablet-menu opacity-0 transition-all  pointer-events-none duration-300 mobile:pb-6 tablet:pb-0 flex flex-col justify-between'
        "
      >
        <ul
          class="flex flex-col gap-8 tablet:px-12 mobile:px-4 max-h-[60vh] overflow-auto justify-between"
        >
          <li
            class="text-nowrap text-[#657178] transition-all duration-200 cursor-pointer hover:text-[#585EE3]"
            v-for="(item, index) in menuItems"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
        <div
          class="social-wrapper items-center gap-2 justify-center mobile:flex tablet:hidden"
        >
          <a
            href="#"
            class="social-element flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full"
          >
            <SVGComponent name="instagram" />
          </a>
          <a
            href="#"
            class="social-element flex items-center justify-center bg-[#F5F8FF] w-8 h-8 rounded-full"
          >
            <SVGComponent name="facebook" />
          </a>
        </div>
      </section>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import SVGComponent from "../partials/SVGComponent.vue";
import SearchComp from "../partials/SearchComp.vue";

// Menu items data
const menuItems = [
  "პოლიტიკა",
  "საზოგადოება",
  "სამართალი",
  "ბიზნესი & ეკონომიკა ",
  "ბიზნესი & ეკონომიკა ",
  "ეკონომიკა",
  "რელიგია",
];

// State management for visible and overflow items
const visibleItems = ref([...menuItems]);
const overflowItems = ref([]);
const showOverflow = ref(false);
const menuContainer = ref(null);

const showMenu = ref(false);
const menuToggle = () => {
  showMenu.value = !showMenu.value;
  if (showMenu.value) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
};
const checkItems = () => {
  nextTick(() => {
    // Reset state for calculations
    visibleItems.value = [...menuItems];
    overflowItems.value = [];
    let totalWidth = 0;

    // Get width of the container and the list items
    const containerWidth = menuContainer.value.offsetWidth;
    const itemWidths = Array.from(
      menuContainer.value.querySelectorAll("li:not(#more)")
    ).map((el) => el.offsetWidth);

    // Determine which items fit in the menu bar
    itemWidths.forEach((width, index) => {
      if (totalWidth + width <= containerWidth - 100) {
        totalWidth += width;
      } else {
        overflowItems.value.push(...visibleItems.value.splice(index));
      }
    });
  });
};

// Recalculate on resize
onMounted(() => {
  window.addEventListener("resize", checkItems);
  checkItems();
});

onUnmounted(() => {
  window.removeEventListener("resize", checkItems);
});

// Toggle overflow menu visibility
const toggleOverflow = () => {
  showOverflow.value = !showOverflow.value;
};
</script>

<style scoped>
.stoke {
  stroke: #585ee3;
}

.menu,
.dropdown ul {
  padding: 0;
  max-width: 50%;
  list-style: none;
}
.dropdown-list {
  top: 40px;
  left: 50%;
  z-index: 3;
  position: absolute;
  width: fit-content;
  border-radius: 16px;
  background: white;
  transform: translateX(-50%);
  box-shadow: 0px 0px 10px 0px #f2f3f7;
}
.tablet-menu {
  left: 0;
  top: 110px;
  width: 100%;
  z-index: 9999;
  position: absolute;
  background: #fff;
  height: calc(100vh - 110px);
}

@media (min-width: 1024px) {
  .logo::before {
    content: "";
    top: 50%;
    right: 0;
    width: 2px;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    background: #f2f3f7;
    transform: translateY(-50%);
  }
}
@media (max-width: 1023px) {
  .header-content {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
