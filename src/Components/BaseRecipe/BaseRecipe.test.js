import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import BaseRecipe from './BaseRecipe';

describe ('BaseRecipe Component', () => {
    it ('Renders the complete BaseRecipe Component and all nested Components', () => {
        const wrapper = shallow(<BaseRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});