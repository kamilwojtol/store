<script lang="ts" setup>
import { ShoppingBagIcon } from "@heroicons/vue/24/outline";
import type { Product } from "~/types/Product";

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});

const favourites = useFavouriteStore();
const cart = useCartStore();
const open = ref(false);

const handleCartClick = (product: Product) => {
  cart.addToCart(product);
  open.value = true;
  setTimeout(() => {
    open.value = false;
  }, 4000);
};

const handleClick = () => {
  if (isInFavourites(favourites.state, props.product.id)) {
    favourites.removeFromFavourites(props.product.id);
  }
  favourites.addToFavourites(props.product);
};
</script>

<template>
  <div class="product-item">
    <NuxtLink to="/cart" v-if="open">
      <SharedInfoPopup title="Product added to cart" type="primary" />
    </NuxtLink>
    <img
      class="product-img"
      :src="props.product.img"
      :alt="props.product.title"
    />
    <div class="flex flex-col px-2">
      <h2 class="text-2xl font-bold mt-2 mb-4">{{ product.title }}</h2>
      <p class="text-2xl product-price font-semibold">{{ product.price }}zł</p>
      <div class="flex flex-row">
        <SharedButton
          type="primary"
          class="mt-3 mb-4"
          @buttonClicked="handleCartClick(product)"
        >
          Add to cart
          <ShoppingBagIcon class="ml-2 btn-icon" />
        </SharedButton>
        <SharedFavouriteButton
          class="ml-2 cursor-pointer"
          @addToFavourite="handleClick"
        />
      </div>
      <p class="product-description">{{ product.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-item {
  .product-img {
    height: auto;
    width: 100%;
  }

  .product-description {
    font-size: 0.8rem;
  }

  .btn-icon {
    height: 19px;
  }
}
</style>
