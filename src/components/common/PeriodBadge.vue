<template>
  <Badge
    :class="[
      'flex flex-wrap items-center font-medium text-xs px-1.5 py-0.5 rounded-md',
      label.toLowerCase() === 'live'
        ? 'text-utility-success-700 border-utility-success-200 bg-utility-success-50'
        : 'text-utility-gray-700 border-utility-gray-200 bg-utility-gray-50'
    ]"
  >
    <span
      :class="[
        'h-2 w-2 rounded-full text-test',
        label.toLowerCase() === 'live' ? 'bg-utility-success-500' : 'bg-utility-gray-500'
      ]"
    ></span>
    {{ label }}
  </Badge>
</template>

<script setup>
import Badge from '../ui/badge/Badge.vue'

const props = defineProps({
  label: String
})
</script>

<style lang="scss" scoped></style>
