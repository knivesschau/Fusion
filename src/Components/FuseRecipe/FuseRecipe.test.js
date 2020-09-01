import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import FuseRecipe from './FuseRecipe';

describe ('FuseRecipe Component', () => {
    it ('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FuseRecipe/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it ('Renders the complete FuseRecipe Component and all nested Components', () => {
        const wrapper = shallow(<FuseRecipe/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});