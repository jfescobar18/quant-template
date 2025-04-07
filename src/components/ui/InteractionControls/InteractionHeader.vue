<template>
  <div class="flex flex-row justify-between items-center items-start p-[16px] pt-[0]">
    <div class="flex flex-col">
      <div class="flex flex-row justify-center items-center">
        <span class="mr-[8px]">Anita Thompson</span> <PeriodBadge :label="'Online'" /><span
          class="percentage ml-[8px] mr-[8px]"
          >SA:72%</span
        >
      </div>
      <span class="location">Berkeley CA</span>
    </div>
    <div class="flex flex-col justify-center items-center hover:cursor-pointer">
      <MessageCircle /><span class="mt-[12px]">Chat</span>
    </div>
  </div>
</template>
<script setup>
import PeriodBadge from '@/components/common/PeriodBadge.vue'
import { MessageCircle } from 'lucide-vue-next'
</script>
<style scoped>
.percentage {
  color: #47cd89;
}

.location {
  color: #94979c;
  font-weight: 400;
}
</style>
