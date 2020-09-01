import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import FusionNav from './FusionNav';

describe ('FusionNav Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        
        ReactDOM.render(
            <BrowserRouter>
                <FusionNav/> 
            </BrowserRouter>,
        div);
        
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete FusionNav Component and all nested Components', () => {
        const wrapper = shallow(<FusionNav/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});