<script lang="ts" setup>
const props = defineProps({
  type: String as PropType<"primary" | "secondary">,
});

const emit = defineEmits(["buttonClicked"]);

const handleButtonClick = () => {
  emit("buttonClicked");
};
</script>

<template>
  <button
    :class="'flex justify-center items-center  btn btn-' + props.type"
    @click="handleButtonClick"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  border: 2px solid #dedede;
  border-radius: 5px;
  padding: 8px 16px;
  width: fit-content;
  height: 44px;

  &-primary {
    background-color: #242424;
    color: #dedede;
    font-size: 1rem;
    text-transform: uppercase;
  }

  &-secondary {
    background-color: #dedede;
    color: #242424;
    font-size: 1rem;
    text-transform: uppercase;
  }
}
</style>
