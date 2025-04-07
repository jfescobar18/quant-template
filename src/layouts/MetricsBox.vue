<template>
  <div class="metrics-container w-fit pt-[20px] pl-[40px] pb-[40px] pr-[26px]">
    <div class="activity flex flex-row">
      {{ data.title }}
      <PeriodBadge :label="data.period" :isActive="data.isActive" />
    </div>
    <div class="mt-[24px] flex flex-row gap-[80px]">
      <MetricsItem
        v-for="(item, index) in data.items"
        :key="index"
        :name="item.name"
        :metric="item.metric"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import PeriodBadge from '@/components/common/PeriodBadge.vue'
import MetricsItem from '@/components/common/MetricsItem.vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      title: 'NPS by Agent',
      period: 'Last 7 Days',
      isActive: false,
      items: []
    })
  }
})
</script>

<style scoped>
.metrics-container {
  height: 164px;
  background-color: #1d1e24;
  border-radius: 16px;
  color: #f7f7f7;
}
</style>
