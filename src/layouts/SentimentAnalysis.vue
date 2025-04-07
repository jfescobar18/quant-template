<template>
  <div class="sentiment-container w-fit pt-[24px] pl-[24px] pb-[24px] pr-[24px]">
    <SentimentAnalysisChart />
    <SentimentAnalysisAdvice />
  </div>
</template>

<script setup>
import SentimentAnalysisChart from '@/components/ui/sentimentAnalysisChart/SentimentAnalysisChart.vue'
import SentimentAnalysisAdvice from '@/components/ui/sentimentAnalysisAdvice/SentimentAnalysisAdvice.vue'

const props = defineProps({
  type: Object,
  required: true,
  default: () => ({
    title: 'Sentiment Analysis',
    period: 'Last 30 Days',
    metric: '80',
    metricLabel: 'Average SA',
    keys: [
      { keyName: 'Neutral', keyColor: '#A4A7AE' },
      { keyName: 'Positive', keyColor: '#17B26A' },
      { keyName: 'Negative', keyColor: '#F04438' }
    ],
    chart: {
      model: 'SA',
      data: [{ positive: 1260, neutral: 95, negative: 34 }]
    }
  })
})
</script>

<style scoped>
.sentiment-container {
  height: 362px;
  background-color: #121213;
  border-radius: 12px;
  color: #f7f7f7;
}
</style>
