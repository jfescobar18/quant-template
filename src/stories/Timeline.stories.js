import { ref, onBeforeMount } from 'vue'
import Timeline from '@/layouts/Timeline.vue'

export default {
  title: 'Example/Timeline',
  component: Timeline,
  tags: ['autodocs']
}

const Template = (args) => ({
  components: { Timeline },
  setup() {
    return { args }
  },
  template: '<Timeline v-bind="args" />'
})

export const Default = () => {
  const data = ref(null)

  onBeforeMount(async () => {
    const response = await fetch(
      'https://j5b3fuv902.execute-api.us-east-2.amazonaws.com/default/Timeline'
    )
    const result = await response.json()
    data.value = result
  })

  return {
    components: { Timeline },
    template: '<Timeline :data="data" v-if="data" />',
    setup() {
      return { data }
    }
  }
}

export const OneElement = Template.bind({})
OneElement.args = {
  data: {
    data: [{ step: 'Created', state: 'complete' }]
  }
}

export const TwoElements = Template.bind({})
TwoElements.args = {
  data: {
    data: [
      { step: 'Created', state: 'complete' },
      { step: 'Action Agent', state: 'inProgress' }
    ]
  }
}

export const ThreeElements = Template.bind({})
ThreeElements.args = {
  data: {
    data: [
      { step: 'Created', state: 'complete' },
      { step: 'Action Agent', state: 'inProgress' },
      { step: 'Escalated to Human', state: 'incomplete' }
    ]
  }
}
