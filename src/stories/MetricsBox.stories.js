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

export const OneElement = Template.bind({})
OneElement.args = {
  data: {
    title: 'NPS by Agent',
    period: 'Last 7 Days',
    items: [{ name: 'Total', metric: '840' }]
  }
}

export const TwoElements = Template.bind({})
TwoElements.args = {
  data: {
    title: 'NPS by Agent',
    period: 'Last 7 Days',
    items: [
      { name: 'Total', metric: '840' },
      { name: 'AHT', metric: '2.8m' }
    ]
  }
}

export const ThreeElements = Template.bind({})
ThreeElements.args = {
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

export const FourElements = Template.bind({})
FourElements.args = {
  data: {
    title: 'NPS by Agent',
    period: 'Last 7 Days',
    items: [
      { name: 'Total', metric: '840' },
      { name: 'AHT', metric: '2.8m' },
      { name: 'ASAI', metric: '0.2s' },
      { name: 'NPS', metric: '752' }
    ]
  }
}
