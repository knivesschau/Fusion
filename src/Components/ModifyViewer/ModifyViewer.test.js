import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ModifyViewer from './ModifyViewer';

describe ('ModifyViewer Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ModifyViewer/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete ModifyViewer Component and all nested Components', () => {
        const wrapper = shallow(<ModifyViewer/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});