import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from './LandingPage';

describe ('LandingPage Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LandingPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete LandingPage Component and all nested Components', () => {
        const wrapper = shallow(<LandingPage/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});