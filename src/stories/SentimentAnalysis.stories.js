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
  return {
    components: { SentimentAnalysis },
    template: '<SentimentAnalysis />'
  }
}

export const Online = Template.bind({})
Online.args = {
  data: {
    positive: 90,
    neutral: 10,
    negative: 10
  }
}
