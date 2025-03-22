<script lang="ts" setup>
import Logo from "@/public/logo.svg";

const props = defineProps({
  mobile: Boolean,
});
</script>

<template>
  <NuxtLink to="/">
    <Logo :class="[props.mobile ? 'text-5xl' : 'text-9xl', 'cusror-pointer']" />
  </NuxtLink>
</template>
