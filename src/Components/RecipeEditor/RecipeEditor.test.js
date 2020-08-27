import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RecipeEditor from './RecipeEditor';

describe ('RecipeEditor Component', () => {
    it ('Renders the complete RecipeEditor Component and all nested Components', () => {
        const wrapper = shallow(<RecipeEditor/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});