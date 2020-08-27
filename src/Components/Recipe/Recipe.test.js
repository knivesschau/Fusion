import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Recipe from './Recipe';

describe ('Recipe Component', () => {
    it ('Renders the complete Recipe Component and all nested Components', () => {
        const wrapper = shallow(<Recipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});