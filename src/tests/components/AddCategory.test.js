import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory'
import React from 'react';

describe('Pruebas en AddCategory', () => {
    const setCategories = () => { };
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe tener el mismo snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Prueba inputChange', () => {
        const value = 'Hola mundo';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

});
