import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con el GETGIFS', () => {
    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('One punch');
        expect(gifs.length).toBe(10);
    });
    test('Debe mandarse categorias', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

});
