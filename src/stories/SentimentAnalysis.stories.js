import { ref, onBeforeMount } from 'vue'
import SentimentAnalysis from '@/layouts/SentimentAnalysis.vue'

export default {
  title: 'Example/SentimentAnalysis',
  component: SentimentAnalysis,
  tags: ['autodocs']
}

const Template = (args) => ({
  components: { SentimentAnalysis },
  setup() {
    return { args }
  },
  template: '<SentimentAnalysis v-bind="args" />'
})

export const Default = () => {
  const data = ref(null)

  onBeforeMount(async () => {
    const response = await fetch(
      'https://ozmanm6p82.execute-api.us-east-2.amazonaws.com/default/SentimentAnalysis'
    )
    const result = await response.json()
    data.value = result
  })

  return {
    components: { SentimentAnalysis },
    template: '<SentimentAnalysis :data="data" v-if="data" />',
    setup() {
      return { data }
    }
  }
}
