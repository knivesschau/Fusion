import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewCookbook from './ViewCookbook';

describe ('ViewCookbook Component', () => {
    it ('Renders the complete ViewCookbook Component and all nested Components', () => {
        const wrapper = shallow(<ViewCookbook/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});