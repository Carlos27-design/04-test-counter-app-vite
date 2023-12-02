//Hay un error porque falta return para retornar un valor
//const getUser = () => {
//{
//uid: "ABC123",
//username: "Elpedo"
//};
//};

//Si no se hace con un return hay que hacerlo de forma explicita con () ejemplo

export const getUser = () => ({
  uid: 'ABC123',
  username: 'Elpedo',
});

//Tarea
//1. Tranformar a una funcion de flecha
//2. Tengo que retornar un objeto implicito
//3. Probarlo
export const getUserActive = (nombre) => ({
  uid: 'ABC623',
  username: nombre,
});
