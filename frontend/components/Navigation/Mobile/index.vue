<script lang="ts" setup>
const props = defineProps({
  showHamburger: Boolean,
});

const emits = defineEmits(["toggle-hamburger"]);
</script>

<template>
  <div
    class="mobile-navigation"
    :class="{
      'absolute left-0 top-0 h-screen w-screen bg-slate-200 py-4':
        props.showHamburger,
    }"
    @click="() => emits('toggle-hamburger')"
  >
    <Logo mobile class="absolute left-2 top-0" />
    <ul
      v-if="props.showHamburger"
      class="flex flex-col justify-center items-center py-2 w-100"
    >
      <li class="py-2">
        <NuxtLink to="/">HOME</NuxtLink>
      </li>
      <li class="py-2">
        <NuxtLink to="/category/men">MEN</NuxtLink>
      </li>
      <li class="py-2">
        <NuxtLink to="/category/women">WOMEN</NuxtLink>
      </li>
      <li class="py-2">
        <NuxtLink to="/about-us">ABOUT US</NuxtLink>
      </li>
    </ul>
  </div>
</template>
