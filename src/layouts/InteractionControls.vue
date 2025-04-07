<template>
  <div class="interaction-container pt-[24px] pl-[24px] pb-[24px] pr-[24px]">
    <InteractionHeader />
    <InteractionButtons />
  </div>
</template>
<script setup>
import InteractionHeader from '@/components/ui/InteractionControls/InteractionHeader.vue'
import InteractionButtons from '@/components/ui/InteractionControls/InteractionButtons.vue'
</script>
<style scoped>
.interaction-container {
  width: 465px;
  background-color: #121213;
  border-radius: 12px;
  color: #f7f7f7;
}
</style>
