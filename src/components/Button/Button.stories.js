import Button from './Button.vue'

export default {
  title: 'tdd-button',
  component: Button
}

export const Default = () => ({
  components: { Button },
  template: '<Button text ="Click me!" />'
})
