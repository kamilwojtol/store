<script lang="ts" setup>
const cart = useCartStore();
const totalPrice = computed(() => {
  const price = cart.state.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  if (price <= 0) {
    return 0;
  }

  return price.toFixed(2);
});
</script>

<template>
  <div>
    <h1 class="text-center my-2 text-2xl">Cart</h1>
    <div v-if="cart.state.length">
      <ul>
        <li v-for="product in cart.state" :key="product.id">
          <div class="flex flex-col md:flex-row items-center mb-4 m-2">
            <img
              :src="product.img"
              :alt="product.title"
              class="max-w-60 mr-2"
            />
            <div>
              <h2 class="text-xl">{{ product.title }}</h2>
              <p class="mt-2">{{ product.description }}</p>
              <div class="flex mt-2 flex-row items-center">
                <p class="text-2xl mr-2">{{ product.price }}</p>
                <label for="quantity">Number of items:</label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  class="ml-2 border border-gray-300 p-1 w-12 rounded-md"
                  v-model="product.quantity"
                />
              </div>
              <SharedButton
                class="mt-2"
                @click="cart.removeFromCart(product.id)"
              >
                Remove from cart
              </SharedButton>
            </div>
          </div>
        </li>
      </ul>
      <p class="text-2xl mt-2">Total: {{ totalPrice }}</p>
    </div>
    <div v-else>
      <p>No products in cart yet</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
input[type="number"]::-webkit-inner-spin-button {
  opacity: 1;
}
</style>
