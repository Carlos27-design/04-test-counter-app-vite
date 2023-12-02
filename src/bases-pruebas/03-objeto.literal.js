const persona = {
  nombre: "Andres",
  apellido: "Pitterson",
  edad: 45,
  direccion: {
    ciudad: "Rio Bueno",
    zip: 12312312,
    lat: 13.323,
    lng: 34.666,
  },
};

//console.table({ persona });
console.log({ persona });

//Copia de referencia
const persona2 = { ...persona };

persona2.nombre = "Carlos";

console.log(persona2);
