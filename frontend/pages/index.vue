<script lang="ts" setup>
const products: any = ref([]);

onMounted(async () => {
  try {
    products.value = await fetch("https://localhost:5000/getProducts");
    const data = await products.value.json();
    products.value = data;
    console.log(products.value);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Products loaded");
  }
});
</script>

<template>
  <div>
    <ProductList v-if="products.length" :products="products" />
    <p v-else>Loading...</p>
  </div>
</template>
