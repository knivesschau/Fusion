import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AddIngredients from './AddIngredients';

describe ('AddIngredients Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddIngredients/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete AddIngredients Component', () => {
        const wrapper = shallow(<AddIngredients/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});