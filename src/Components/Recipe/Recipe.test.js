import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Recipe from './Recipe';

describe ('Recipe Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <Recipe/>
            </BrowserRouter>,
        div);

        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete Recipe Component and all nested Components', () => {
        const wrapper = shallow(<Recipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});