<script lang="ts" setup>
import products from "~/assets/products";

const route = useRoute();
</script>

<template>
  <ProductItem :product="products[Number(route.params.id) - 1]" />
</template>
