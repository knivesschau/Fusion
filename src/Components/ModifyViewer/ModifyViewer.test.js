import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ModifyViewer from './ModifyViewer';

describe ('ModifyViewer Component', () => {
    it ('Renders the complete ModifyViewer Component and all nested Components', () => {
        const wrapper = shallow(<ModifyViewer/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});