import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import BaseViewer from './BaseViewer';

describe ('BaseViewer Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BaseViewer/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete BaseViewer Component and all nested Components', () => {
        const wrapper = shallow(<BaseViewer/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});