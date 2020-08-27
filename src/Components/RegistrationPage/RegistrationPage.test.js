import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RegistrationPage from './RegistrationPage';

describe ('RegistrationPage Component', () => {
    it ('Renders the complete RegistrationPage Component and all nested Components', () => {
        const wrapper = shallow(<RegistrationPage/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});