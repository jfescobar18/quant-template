<template>
  <div class="flex flex-col">
    <div class="flex flex-row text-[14px] mb-[4px]">
      <CircleCheck class="fill-[#535862] ml-[2px]" v-if="state.toLowerCase() === 'complete'" />
      <div class="circle-radius p-[2px]" v-else>
        <CircleDot class="fill-[#535862]" />
      </div>
      <span class="ml-[12px]">{{ step }}</span>
    </div>
    <div v-if="!isLast" class="separator ml-[14px]"></div>
  </div>
</template>
<script setup>
import { CircleCheck } from 'lucide-vue-next'
import { CircleDot } from 'lucide-vue-next'

const props = defineProps({
  step: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  isLast: {
    type: Boolean,
    default: false
  }
})
</script>
<style scoped>
.separator {
  width: 2px;
  height: 14px;
  background-color: #a4a7ae;
}

.circle-radius {
  border-radius: 50%;
  border: 1px solid #535862;
}
</style>
