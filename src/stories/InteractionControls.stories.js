import InteractionControls from '@/layouts/InteractionControls.vue'

export default {
  title: 'Example/InteractionControls',
  component: InteractionControls,
  tags: ['autodocs']
}

export const Default = () => {
  return {
    components: { InteractionControls },
    template: '<InteractionControls />'
  }
}
