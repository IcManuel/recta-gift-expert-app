import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from "enzyme";
import React from 'react'


describe('Pruebas en el GifGridItem', () => {
    const titule = 'Un título';
    const url = 'https://localhost/ALGO.PNG';
    let wrapper = shallow(<GifGridItem irl={url} title={titule} />);



    beforeEach(() => {
        wrapper = shallow(<GifGridItem irl={url} title={titule} />);
    });

    test('Primer punto', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titule);
    });
    test('Debe de tener la imagen  igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titule);
    });

    test('Debe tener animate_fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain('animate__fadeIn');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    });


});
