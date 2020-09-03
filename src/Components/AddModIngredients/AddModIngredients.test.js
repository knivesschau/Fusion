import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AddModIngredients from './AddModIngredients';

describe ('AddModIngredients Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddModIngredients/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete AddModIngredients Component', () => {
        const wrapper = shallow(<AddModIngredients/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});