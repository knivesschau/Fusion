import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import PickStarter from './PickStarter';

describe ('PickStarter Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PickStarter/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete PickStarter Component and all nested Components', () => {
        const wrapper = shallow(<PickStarter/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});