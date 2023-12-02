import { getHeroeByIdAsync } from '../../src/bases-pruebas/09-promesas';

describe('Pruebas en 09-Promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });

      done();
    });
  });

  test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })

      .catch((error) => {
        expect(error).toBe(`No se puede encontrar el heroes ${id}`);

        done();
      });
  });
});
