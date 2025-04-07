<template>
  <div class="recommendation-container w-fit pt-[24px] pl-[24px] pb-[24px] pr-[24px]">
    <div class="recommendation-header flex flex-row justify-between mb-[20px]">
      <span>Recommended</span><EllipsisVertical class="hover:cursor-pointer w-[20px]" />
    </div>

    <div class="flex flex-col gap-[8px]">
      <RecommendedCard
        v-for="(item, index) in data.data"
        :key="index"
        :score="item.score"
        :text="item.text"
        :cardKey="item.key"
      />
    </div>

    <div class="mt-4 text-right w-full">
      <span class="text-sm cursor-pointer hover:underline">Show More</span>
    </div>
  </div>
</template>

<script setup>
import { EllipsisVertical } from 'lucide-vue-next'
import RecommendedCard from '@/components/ui/recommendedCard/RecommendedCard.vue'
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      data: [
        {
          score: '0.5',
          text: "I am sorry but I don't think a Costco Membership will work",
          key: '1'
        },
        { score: '0.4', text: "A Costco membership won't work for this. ", key: '2' },
        { score: '0.1', text: 'I rather take your Driving license', key: '3' }
      ]
    })
  }
})
</script>
<style scoped>
.recommendation-container {
  width: 461px;
  background-color: #121213;
  border-radius: 12px;
  color: #f7f7f7;
}

.recommendation-header {
  font-size: 18px;
}
</style>
