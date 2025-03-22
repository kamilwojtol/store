<script lang="ts" setup>
import { HeartIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  small: Boolean,
});

const emit = defineEmits(["addToFavourite"]);

const favourites = useFavouriteStore();

const handleAddToFavouriteButton = () => {
  emit("addToFavourite");
};
</script>

<template>
  <button>
    <HeartIcon
      :class="[props.small ? 'w-5' : 'w-10']"
      @click="handleAddToFavouriteButton"
    />
  </button>
</template>
