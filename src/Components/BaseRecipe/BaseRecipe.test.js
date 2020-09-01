import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import BaseRecipe from './BaseRecipe';

describe ('BaseRecipe Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BaseRecipe/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete BaseRecipe Component and all nested Components', () => {
        const wrapper = shallow(<BaseRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});