import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import FusionNav from './FusionNav';

describe ('FusionNav Component', () => {
    it ('Renders the complete FusionNav Component and all nested Components', () => {
        const wrapper = shallow(<FusionNav/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});