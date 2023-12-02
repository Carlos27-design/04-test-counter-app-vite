import { getUser, getUserActive } from '../../src/bases-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
  test('getUser debe de retornar un Objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'Elpedo',
    };

    const user = getUser(testUser);
    expect(testUser).toStrictEqual(user);
  });

  test('getUsuarioActivo debe de retornar un Objeto', () => {
    const name = 'Carlos';

    const user = getUserActive(name);

    expect(user).toEqual({
      uid: 'ABC623',
      username: name,
    });
  });
});
