<script lang="ts" setup>
const favourites = useFavouriteStore();
const cart = useCartStore();

onMounted(() => {
  favourites.loadFromLocalStorage();
  cart.loadFromLocalStorage();
});
</script>

<template>
  <div class="container mx-auto">
    <Navigation />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "tailwindcss";
</style>
