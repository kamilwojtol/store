<script lang="ts" setup>
import type { Product } from "~/types/Product";

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});

const favourites = useFavouriteStore();

const handleClick = () => {
  if (isInFavourites(favourites.state, props.product.id)) {
    favourites.removeFromFavourites(props.product.id);
  }
  favourites.addToFavourites(props.product);
};
</script>

<template>
  <div class="product-card p-2 m-2">
    <img
      class="product-card-img"
      :src="props.product.img"
      :alt="props.product.title"
    />
    <div class="flex flex-row justify-between items-center">
      <div>
        <h3 class="mt-2">{{ props.product.title }}</h3>
        <p>{{ props.product.price }}</p>
      </div>
      <SharedFavouriteButton small @addToFavourite="handleClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card {
  border: 1px solid #242424;
  border-radius: 2px;
  width: fit-content;
}

.product-card-img {
  height: 160px;
  width: auto;
}

.btn-icon {
  height: 19px;
}
</style>
