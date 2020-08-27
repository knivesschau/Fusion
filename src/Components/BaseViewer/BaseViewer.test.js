import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import BaseViewer from './BaseViewer';

describe ('BaseViewer Component', () => {
    it ('Renders the complete BaseViewer Component and all nested Components', () => {
        const wrapper = shallow(<BaseViewer/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});