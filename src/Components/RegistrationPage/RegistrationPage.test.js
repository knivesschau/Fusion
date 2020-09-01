import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RegistrationPage from './RegistrationPage';

describe ('RegistrationPage Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RegistrationPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete RegistrationPage Component and all nested Components', () => {
        const wrapper = shallow(<RegistrationPage/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});