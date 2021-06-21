import { shallowMount } from '@vue/test-utils'
import Button from './Button.vue'

describe('components - Button', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(Button)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('Named tdd-button', () => {
    expect(wrapper.name()).toBe('tdd-button')
  })

  it('Contains a button element', () => {
    const buttonExists = wrapper.find('button').exists();
    expect(buttonExists).toBe(true)
  })

  it('Renders button text using a "text" prop', async () => {
    const expectedText = 'Click me';
    await wrapper.setProps({ text: expectedText })
    expect(wrapper.text()).toBe(expectedText)
  })

  it('Has default button styles', () => {
    expect(wrapper.classes('btn-send')).toBe(true)
  })

  it('Emits a click event when clicked', () => {
    wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
});

