import { ref, onBeforeMount } from 'vue'
import RecommendationsList from '@/layouts/RecommendationsList.vue'

export default {
  title: 'Example/RecommendationsList',
  component: RecommendationsList,
  tags: ['autodocs']
}

const Template = (args) => ({
  components: { RecommendationsList },
  setup() {
    return { args }
  },
  template: '<RecommendationsList v-bind="args" />'
})

export const Default = () => {
  const data = ref(null)

  onBeforeMount(async () => {
    const response = await fetch(
      'https://jr5dlc8rx3.execute-api.us-east-2.amazonaws.com/default/RecommendationList'
    )
    const result = await response.json()
    data.value = result
  })

  return {
    components: { RecommendationsList },
    template: '<RecommendationsList :data="data" v-if="data" />',
    setup() {
      return { data }
    }
  }
}

export const OneElement = Template.bind({})
OneElement.args = {
  data: {
    data: [
      {
        score: '0.5',
        text: "I am sorry but I don't think a Costco Membership will work",
        key: '1'
      }
    ]
  }
}

export const TwoElements = Template.bind({})
TwoElements.args = {
  data: {
    data: [
      {
        score: '0.5',
        text: "I am sorry but I don't think a Costco Membership will work",
        key: '1'
      },
      { score: '0.4', text: "A Costco membership won't work for this. ", key: '2' }
    ]
  }
}

export const ThreeElements = Template.bind({})
ThreeElements.args = {
  data: {
    data: [
      {
        score: '0.5',
        text: "I am sorry but I don't think a Costco Membership will work",
        key: '1'
      },
      { score: '0.4', text: "A Costco membership won't work for this. ", key: '2' },
      { score: '0.1', text: 'I rather take your Driving license', key: '3' }
    ]
  }
}
