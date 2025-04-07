<template>
  <div class="timeline-container pt-[24px] pb-[24px] pl-[24px] pr-[24px]">
    <div class="flex flex-col gap-[4px]">
      <TimelineStep
        v-for="(item, index) in data.data"
        :key="index"
        :step="item.step"
        :state="item.state"
        :isLast="index === data.data.length - 1"
      />
    </div>
  </div>
</template>
<script setup>
import TimelineStep from '@/components/ui/TimelineStep/TimelineStep.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      data: [
        { step: 'Created', state: 'complete' },
        { step: 'Action Agent', state: 'inProgress' },
        { step: 'Escalated to Human', state: 'incomplete' }
      ]
    })
  }
})
</script>
<style scoped>
.timeline-container {
  width: 465px;
  background-color: #121213;
  border-radius: 12px;
  color: #f7f7f7;
}
</style>
