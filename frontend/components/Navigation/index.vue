<script lang="ts" setup>
import {
  Bars3Icon,
  HeartIcon,
  XMarkIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/24/outline";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const isMobileNavigationVisible = ref(false);
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = ref(false);
const setIsMobile = () => {
  isMobile.value = breakpoints.isSmallerOrEqual("md");
};

onMounted(() => {
  setIsMobile();
  window.addEventListener("resize", () => {
    setIsMobile();
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    setIsMobile();
  });
});

const handleClick = () => {
  isMobileNavigationVisible.value = !isMobileNavigationVisible.value;
};
</script>

<template>
  <div
    class="navigation relative p-3 flex items-center"
    :class="{ 'justify-end': isMobile }"
  >
    <NuxtLink to="/favourites">
      <HeartIcon
        class="navigation-hamburger cursor-pointer"
        v-if="isMobile && !isMobileNavigationVisible"
      />
    </NuxtLink>
    <NuxtLink to="/cart">
      <ShoppingBagIcon
        class="navigation-hamburger cursor-pointer"
        v-if="isMobile && !isMobileNavigationVisible"
      />
    </NuxtLink>
    <Bars3Icon
      v-if="isMobile && !isMobileNavigationVisible"
      class="navigation-hamburger cursor-pointer"
      @click="handleClick"
    />
    <XMarkIcon
      v-if="isMobile && isMobileNavigationVisible"
      class="navigation-hamburger cursor-pointer"
      @click="handleClick"
    />
    <NavigationMobile
      v-if="isMobile"
      :show-hamburger="isMobileNavigationVisible"
      @toggle-hamburger="handleClick"
    />
    <NavigationDesktop v-else />
  </div>
</template>

<style scoped lang="scss">
.navigation {
  &-hamburger {
    height: 40px;
    width: auto;
    z-index: 3;
  }
}
</style>
