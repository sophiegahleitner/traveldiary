import {mount} from '@vue/test-utils'
import Component from '../../../test-traveldiary/src/layout/FooterComponent.vue'


describe('Component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Component);
        expect(wrapper.isVueInstance()).toBeTruthy()
    });

        //snapchot test(obsolet)
        test('renders correctly', () => {
            const wrapper = mount(Component)
            expect(wrapper.element).toMatchSnapshot()
        })
})