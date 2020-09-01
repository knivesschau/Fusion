import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AddModSteps from './AddModSteps';

describe ('AddModSteps Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddModSteps/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete AddModSteps Component', () => {
        const wrapper = shallow(<AddModSteps/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});