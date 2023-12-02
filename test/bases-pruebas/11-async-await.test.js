import { getImage } from '../../src/bases-pruebas/11-Async-Await';

describe('Pruebas 11-async-await', () => {
  test('getImage debe de retornar una url de la imagen', async () => {
    const url = await getImage();

    expect(url).toBe('No se encontro la imagen');
  });
  test('getImage debe de retornar un error si no tenemos apiKey ', async () => {
    const resp = await getImage();

    expect(resp).toBe('No se encontro la imagen');
  });
});
