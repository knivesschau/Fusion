import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import PickStarter from './PickStarter';

describe ('PickStarter Component', () => {
    it ('Renders the complete PickStarter Component and all nested Components', () => {
        const wrapper = shallow(<PickStarter/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});