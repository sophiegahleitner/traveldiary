// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
//
// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

import {mount} from '@vue/test-utils'
import Component from '../../../test-traveldiary/src/layout/FooterComponent.vue'

describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Component);
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})