<template>
  <span
    class="flex items-center w-fit gap-1.5 ml-[8px] h-[22px] px-[6px] text-[12px] rounded"
    :class="statusClasses"
  >
    <span
      class="inline-block rounded-full w-2 h-2"
      :style="{ backgroundColor: isActive ? '#17B26A' : '#85888E' }"
    ></span>
    <span :style="{ color: isActive ? '#75E0A7' : '#CECFD2' }">
      {{ label }}
    </span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const { label, isActive } = props

const statusClasses = computed(() => {
  return {
    'bg-[#053321] border border-[#085D3A]': isActive,
    'bg-[#13161B] border border-[#373A41]': !isActive
  }
})
</script>
