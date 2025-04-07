<template>
  <div class="full max-w-md mx-auto">
    <div class="flex gap-[16px] mb-[8px]">
      <button
        class="action-button flex flex-row justify-center items-center flex-1 py-2 px-4 rounded-[8px] hover:cursor-pointer"
      >
        <ArrowRight class="mr-[4px]" />Transfer
      </button>
      <button
        class="action-button flex flex-row justify-center items-center flex-1 py-2 px-4 rounded-[8px] hover:cursor-pointer"
      >
        <CircleAlert class="mr-[4px]" />Request Support
      </button>
    </div>

    <div>
      <button
        class="cancel-button flex flex-row justify-center items-center w-full py-2 px-4 rounded-[8px] hover:cursor-pointer"
      >
        <X class="mr-[4px]" />End Chat
      </button>
    </div>
  </div>
</template>
<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { CircleAlert } from 'lucide-vue-next'
import { X } from 'lucide-vue-next'
</script>
<style scoped>
.action-button {
  border: 1px solid #373a41;
  color: #85888e;
}

.cancel-button {
  border: 1px solid #f97066;
  color: #f97066;
}
</style>
