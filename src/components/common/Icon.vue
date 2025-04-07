<template>
  <img :src="image" :alt="altText" :width="width" :height="height" class="icon" />
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    required: true
  },
  height: {
    type: [String, Number],
    required: true
  },
  altText: {
    type: String,
    required: false,
    default: 'Icon'
  }
})
</script>

<style scoped>
.icon {
  fill: currentColor;
}
</style>
