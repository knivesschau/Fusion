import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RecipeInfo from './RecipeInfo';

describe ('RecipeInfo Component', () => {
    it ('Renders the complete RecipeInfo Component and all nested Components', () => {
        const wrapper = shallow(<RecipeInfo/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});