<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
}>(), {
  variant: 'primary',
  type: 'button',
  disabled: false,
  fullWidth: false,
})

defineEmits<{ click: [] }>()
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center gap-sm font-medium text-base leading-normal transition-all duration-200',
      'px-xl py-md rounded-xl',
      'focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      fullWidth && 'w-full',
      variant === 'primary' && [
        'bg-gradient-to-l from-primary-500 to-primary-700 text-white shadow-button',
        'hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(99,102,241,0.5)]',
        'active:translate-y-0',
        'disabled:hover:translate-y-0',
      ],
      variant === 'secondary' && [
        'glass text-white',
        'hover:-translate-y-0.5',
      ],
      variant === 'ghost' && [
        'text-dark-300 hover:text-white hover:bg-white/5',
        'rounded-lg',
      ],
    ]"
  >
    <slot />
  </button>
</template>
