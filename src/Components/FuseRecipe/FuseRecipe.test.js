import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import FuseRecipe from './FuseRecipe';

describe ('FuseRecipe Component', () => {
    it ('Renders the complete FuseRecipe Component and all nested Components', () => {
        const wrapper = shallow(<FuseRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});