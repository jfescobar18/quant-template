<template>
  <div class="flex flex-row w-[413px]">
    <span class="w-[32px] pt-[8px]"><Icon :image="star" :alt="star" :width="16" :height="16" /></span>
    <p class="w-[353px] ml-[12px]">
      Interactions have been mostly positive, customer has received accurate information in 10 out
      of 8 questions. The tone has been cordial in general, except over one interaction when she
      asked to talk with an actual person.
    </p>
  </div>
</template>

<script setup>
import Icon from '@/components/common/Icon.vue'
import star from '@/assets/icon/star.svg'
</script>

<style scoped>
p {
  font-size: 12px;
}
</style>
