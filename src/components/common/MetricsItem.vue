<template>
  <div class="flex flex-col">
    <div class="name">{{ name }}</div>
    <div class="metric">{{ metric }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  metric: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.name {
  font-size: 16px;
}

.metric {
  font-size: 32px;
}
</style>
