import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AddSteps from './AddSteps';

describe ('AddSteps Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddSteps/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete AddSteps Component', () => {
        const wrapper = shallow(<AddSteps/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});