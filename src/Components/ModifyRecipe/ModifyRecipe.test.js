import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ModifyRecipe from './ModifyRecipe';

describe ('ModifyRecipe Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ModifyRecipe/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete ModifyRecipe Component and all nested Components', () => {
        const wrapper = shallow(<ModifyRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});