import {
  getHeroeById,
  getHeroeByOwner,
} from '../../src/bases-pruebas/08-import-export';
import heroes from '../../src/data/heroes';

describe('Pruebas a 08-import-export', () => {
  test('getHeroeById debe de retornar un hero por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeById debe de retornar undefined si no existe', () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();
  });

  //Tarea
  //Debe retornar un arreglo con los heroes de DC
  //Lenght === 3
  //toEqual al arreglo filtrado
  test('Debe retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC';
    const heroesDC = getHeroeByOwner(owner);

    expect(heroesDC).toEqual(heroes.filter((heroes) => heroes.owner === owner));
  });

  //debe de retornar un arreglo con los heroes de Marvel
  //length === 2
  test('Debe de retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel';
    const heroesMarvel = getHeroeByOwner(owner);

    expect(heroesMarvel).toEqual(
      heroes.filter((heroes) => heroes.owner === owner)
    );
  });
});
