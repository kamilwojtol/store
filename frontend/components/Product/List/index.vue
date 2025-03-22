<script lang="ts" setup>
import type { PropType } from "vue";
import type { Product } from "~/types/Product";

const props = defineProps({
  products: {
    type: Object as PropType<Product[]>,
    required: true,
  },
});
</script>

<template>
  <div class="product-list">
    <NuxtLink
      v-for="product in products"
      :to="{
        name: 'product-id',
        params: {
          id: product.id,
        },
      }"
      class="product-link"
    >
      <ProductCard :product="product" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.product-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.product-link {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
