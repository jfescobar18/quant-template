<template>
  <span
    class="flex items-center w-fit gap-1.5 ml-[8px] h-[22px] px-[6px] text-[12px] rounded"
    :class="status.statusClasses"
  >
    <span
      class="inline-block rounded-full w-2 h-2"
      :style="{ backgroundColor: status.statusColor }"
    ></span>
    <span :style="{ color: status.statusColorText }">
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
  }
})

const labelNormalized = computed(() => props.label.toLowerCase())

const status = computed(() => {
  const isLive = labelNormalized.value === 'live'

  return {
    statusColor: isLive ? '#17B26A' : '#85888E',
    statusColorText: isLive ? '#75E0A7' : '#CECFD2',
    statusClasses: isLive
      ? 'bg-[#053321] border border-[#085D3A]'
      : 'bg-[#13161B] border border-[#373A41]'
  }
})
</script>
