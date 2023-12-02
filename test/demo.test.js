describe('Esta es una prueba para test', () => {
  test('Este esta prueba no debe fallar', () => {
    const message1 = 'Este es un demo';

    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
