//Desestructuracion
//Asignacion Desestructurante

//Desestructuracion de la persona
//const { nombre, edad, clave } = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

export const usContext = ({ clave, nombre, edad, rango = 'Capitan' }) => {
  return {
    nombreClave: clave,
    anios: edad,
  };
};
