import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RecipeInfo from './RecipeInfo';

describe ('RecipeInfo Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <RecipeInfo/> 
            </BrowserRouter>,
        div);

        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete RecipeInfo Component and all nested Components', () => {
        const wrapper = shallow(<RecipeInfo/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});