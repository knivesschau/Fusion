import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ModifyRecipe from './ModifyRecipe';

describe ('ModifyRecipe Component', () => {
    it ('Renders the complete ModifyRecipe Component and all nested Components', () => {
        const wrapper = shallow(<ModifyRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});