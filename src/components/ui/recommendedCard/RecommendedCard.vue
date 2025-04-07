<template>
  <div
    class="recommended-item flex flex-row justify-around items-center pt-[16px] pb-[16px] pr-[16px]"
  >
    <ArrowLeft class="icon w-[20px] hover:cursor-pointer" />
    <div class="w-[297px]">
      <p>{{ text }}</p>
      <div class="variant mt-[6px] hover:cursor-pointer">Create Variant</div>
    </div>
    <div>
      <span class="score">+{{ score }}</span>
      <span class="icon key-container flex flex-row items-center justify-center w-[30px] h-[24px]"
        ><OptionIcon class="w-[14px]" /><span class="text-[14px]">{{ cardKey }}</span></span
      >
    </div>
  </div>
</template>
<script setup>
import { ArrowLeft } from 'lucide-vue-next'
import { OptionIcon } from 'lucide-vue-next'
const props = defineProps({
  score: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  cardKey: {
    type: String,
    required: true
  }
})
</script>
<style scoped>
.recommended-item {
  background-color: #373a41;
  border-radius: 8px;
  width: 413px;
}

.variant {
  color: #b3b8db;
}

.score {
  font-weight: 700;
  color: #47cd89;
}

.icon {
  color: #94979c;
}

.key-container {
  background-color: #0c0e12;
  border-radius: 4px;
}
</style>
