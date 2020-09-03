import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewRecipe from './ViewRecipe';

describe ('ViewRecipe Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <ViewRecipe/> 
            </BrowserRouter>,
        div);
        
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete ViewRecipe Component and all nested Components', () => {
        const wrapper = shallow(<ViewRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});