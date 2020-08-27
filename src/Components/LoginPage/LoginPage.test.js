import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginPage from './LoginPage';

describe ('LoginPage Component', () => {
    it ('Renders the complete LoginPage Component and all nested Components', () => {
        const wrapper = shallow(<LoginPage/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});