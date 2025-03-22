<script lang="ts" setup>
import type { Product } from "~/types/Product";

const favourites = useFavouriteStore();
const cart = useCartStore();
const open = ref(false);

const handleCartClick = (product: Product) => {
  open.value = true;
  cart.addToCart(product);
};
</script>

<template>
  <div>
    <h1 class="text-center my-2 text-2xl">Favourites</h1>
    <div v-if="favourites.state.length">
      <ul>
        <li v-for="favourite in favourites.state" :key="favourite.id">
          <NuxtLink :to="`/product/${favourite.id}`">
            <div class="flex flex-col md:flex-row items-center mb-4 m-2">
              <img
                :src="favourite.img"
                :alt="favourite.title"
                class="max-w-60 mr-2"
              />
              <div>
                <h2 class="text-xl">{{ favourite.title }}</h2>
                <p class="text-2xl mt-2">{{ favourite.price }}</p>
                <div class="flex mt-2">
                  <SharedButton
                    type="secondary"
                    class="mr-2"
                    @click="favourites.removeFromFavourites(favourite.id)"
                  >
                    Remove from favourites
                  </SharedButton>
                  <SharedButton
                    type="primary"
                    @buttonClicked="handleCartClick(favourite)"
                  >
                    Add to cart
                    <ShoppingBagIcon class="ml-2 btn-icon" />
                  </SharedButton>
                </div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No favourites yet</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
