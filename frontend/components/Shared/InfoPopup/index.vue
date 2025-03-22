<script lang="ts" setup>
const open = ref(false);

const props = defineProps({
  open: Boolean,
  title: String,
  type: String,
});

onMounted(() => {
  open.value = true;
  setTimeout(() => {
    open.value = false;
  }, 4000);
});
</script>

<template>
  <Teleport to="body">
    <div v-if="open" :class="`info-popup-${props.type}`">
      <p>{{ props.title }}</p>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.info-popup-primary {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #f3f4f6;
  padding: 1rem;
  text-align: center;
  color: #000;
  z-index: 99;
}
</style>
