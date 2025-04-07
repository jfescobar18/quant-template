import { ref, onBeforeMount } from 'vue'
import MetricsBox from '@/layouts/MetricsBox.vue'

export default {
  title: 'Example/MetricsBox',
  component: MetricsBox,
  tags: ['autodocs']
}

const Template = (args) => ({
  components: { MetricsBox },
  setup() {
    return { args }
  },
  template: '<MetricsBox v-bind="args" />'
})

export const Default = () => {
  const data = ref(null)

  onBeforeMount(async () => {
    const response = await fetch(
      'https://go10odx0na.execute-api.us-east-2.amazonaws.com/default/MetricsBox'
    )
    const result = await response.json()
    data.value = result
  })

  return {
    components: { MetricsBox },
    template: '<MetricsBox :data="data" v-if="data" />', // Solo renderiza cuando data esté disponible
    setup() {
      return { data }
    }
  }
}

export const OneElementInactive = Template.bind({})
OneElementInactive.args = {
  data: {
    title: 'NPS by Agent',
    period: 'Last 7 Days',
    items: [{ name: 'Total', metric: '840' }]
  }
}

export const TwoElementsInactive = Template.bind({})
TwoElementsInactive.args = {
  data: {
    title: 'NPS by Agent',
    period: 'Last 7 Days',
    items: [
      { name: 'Total', metric: '840' },
      { name: 'AHT', metric: '2.8m' }
    ]
  }
}

export const ThreeElementsInactive = Template.bind({})
ThreeElementsInactive.args = {
  data: {
    title: 'NPS by Agent',
    period: 'Last 7 Days',
    items: [
      { name: 'Total', metric: '840' },
      { name: 'AHT', metric: '2.8m' },
      { name: 'ASAI', metric: '0.2s' }
    ]
  }
}

export const FourElementsActive = Template.bind({})
FourElementsActive.args = {
  data: {
    title: 'NPS by Agent',
    period: 'Live',
    items: [
      { name: 'Total', metric: '840' },
      { name: 'AHT', metric: '2.8m' },
      { name: 'ASAI', metric: '0.2s' },
      { name: 'NPS', metric: '752' }
    ]
  }
}
