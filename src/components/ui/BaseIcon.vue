<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  size?: string
}>(), {
  size: 'w-5 h-5',
})
</script>

<template>
  <span
    :aria-hidden="label ? undefined : true"
    :aria-label="label"
    :role="label ? 'img' : undefined"
    class="inline-flex shrink-0 items-center justify-center"
  >
    <slot />
  </span>
</template>
