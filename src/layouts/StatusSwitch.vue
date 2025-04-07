<template>
  <div class="status-container">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger class="bg-[#079455] px-[10px] py-[6px] rounded-[0]" v-if="data.isOnline">
          <span class="flex flex-row items-center">
            <CircleCheck class="mr-[10px] text-[#47CD89]" />
            Ready Chat 00:12
          </span>
        </AccordionTrigger>

        <AccordionTrigger class="bg-[#D92D20] px-[10px] py-[6px] rounded-[0]" v-else>
          <span class="flex flex-row items-center">
            <CircleCheck class="mr-[10px] text-[#F97066]" />
            Ready Chat 00:12
          </span>
        </AccordionTrigger>
        <AccordionContent class="px-[10px] py-[6px]">
          <span
            class="flex flex-row items-center mt-[20px] h-[36px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#079455]" />
            <span>Ready All <span class="text-[#94979C]">(Voice / Text)</span></span>
          </span>
          <span
            class="flex flex-row items-center h-[36px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#079455]" />
            <span>Ready Chat</span>
          </span>
          <span
            class="flex flex-row items-center h-[36px] mb-[8px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#079455]" />
            <span>Ready Text</span>
          </span>

          <span
            class="flex flex-row items-center h-[36px] border-t border-[#22262F] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#F97066]" />
            <span>Break</span>
          </span>
          <span
            class="flex flex-row items-center h-[36px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#F97066]" />
            <span>Follow-up work</span>
          </span>
          <span
            class="flex flex-row items-center h-[36px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#F97066]" />
            <span>Meal</span>
          </span>
          <span
            class="flex flex-row items-center h-[36px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#F97066]" />
            <span>Meeting</span>
          </span>
          <span
            class="flex flex-row items-center h-[36px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#F97066]" />
            <span>Restroom Break</span>
          </span>
          <span
            class="flex flex-row items-center h-[36px] mb-[20px] pl-[8px] hover:bg-[#22262F] rounded-[8px]"
          >
            <CircleX class="mr-[10px] text-[#F97066]" />
            <span>Training</span>
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
<script setup>
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { CircleCheck } from 'lucide-vue-next'
import { CircleX } from 'lucide-vue-next'

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => ({
      isOnline: false
    })
  }
})
</script>
<style scoped>
.status-container {
  width: 465px;
  background-color: #121213;
  color: #f7f7f7;
}
</style>
