import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewRecipe from './ViewRecipe';

describe ('ViewRecipe Component', () => {
    it ('Renders the complete ViewRecipe Component and all nested Components', () => {
        const wrapper = shallow(<ViewRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});