<script lang="ts" setup>
import products from "~/assets/products";

const categoryParam = useRoute().params.category;
const category: string = Array.isArray(categoryParam)
  ? categoryParam[0]
  : categoryParam;

const filteredProducts = computed(() => {
  return products.filter((product) => product.category.includes(category));
});
</script>

<template>
  <div>
    <h2>{{ category.toUpperCase() }}</h2>
  </div>

  <div>
    <ProductList :products="filteredProducts" />
  </div>
</template>
