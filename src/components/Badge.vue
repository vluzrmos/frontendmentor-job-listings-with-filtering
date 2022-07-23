<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "default",
  },
});
</script>

<template>
  <div class="badge" :class="[ 'badge--'+props.variant]">
    <slot />
  </div>
</template>