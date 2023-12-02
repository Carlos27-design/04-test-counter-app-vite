import { usContext } from '../../src/bases-pruebas/06-desestructuracion-obj';

describe('Pruebas a 06-deses-obj', () => {
  test('Desestructuracion de un objecto', () => {
    const clave = 'Desector';
    const name = 'Carlos';
    const edad = 27;
    const rango = 'Capitan';

    const context = usContext({ clave, name, edad, rango });

    expect(context).toEqual({
      nombreClave: clave,
      anios: edad,
    });
  });
});
