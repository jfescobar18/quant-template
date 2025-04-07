import StatusSwitch from '@/layouts/StatusSwitch.vue'

export default {
  title: 'Example/StatusSwitch',
  component: StatusSwitch,
  tags: ['autodocs']
}

const Template = (args) => ({
  components: { StatusSwitch },
  setup() {
    return { args }
  },
  template: '<StatusSwitch v-bind="args" />'
})

export const Default = () => {
  return {
    components: { StatusSwitch },
    template: '<StatusSwitch />'
  }
}

export const Online = Template.bind({})
Online.args = {
  data: {
    isOnline: true
  }
}

export const Offline = Template.bind({})
Offline.args = {
  data: {
    isOnline: false
  }
}
