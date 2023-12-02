import { getHeroeById } from './08-import-export';

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      //Importar el 08-export-import

      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      }
      reject('No se puede encontrar el heroes ' + id);
    }, 1000);
  });
};
