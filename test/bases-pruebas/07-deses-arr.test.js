import { retornarArreglo } from '../../src/bases-pruebas/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
  test('Debe retornar un string y un numero', () => {
    const [letters, numbers] = retornarArreglo();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));
  });
});
