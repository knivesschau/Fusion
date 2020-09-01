import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewCookbook from './ViewCookbook';

describe ('ViewCookbook Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <ViewCookbook/>
            </BrowserRouter>,
        div);

        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete ViewCookbook Component and all nested Components', () => {
        const wrapper = shallow(<ViewCookbook/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});