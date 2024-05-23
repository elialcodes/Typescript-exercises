//trabajamos con la librería no tipada lodash, que tiene muchas funciones que complementan Javascript,
//pero que no soporta Typescript

//así se implementaría la librería según viene en la documentación:
//npm install lodash;// para instalar la librería

//En el archivo cargamos la librería al completo con:
//var _ = require('lodash');

//Typescript nos devuelve error si escribimos sin más:
//import _ from 'lodash';
//pero VSC nos hace una sugerencia si nos posicionamos encima con el ratón,
//nos indica poner esto en la terminal: npm install --save-dev @types/lodash
//así agregamos manualmente un sistema de tipos y al hacerlo desaparece el error y podemos continuar

import _ from 'lodash';
var _ = require('lodash');

//creamos un array de objetos:
const data = [
  {
    username: 'Noelia',
    role: 'admin',
  },
  {
    username: 'Elena',
    role: 'student',
  },
  {
    username: 'Leo',
    role: 'student',
  },
  {
    username: 'Alberto',
    role: 'customer',
  },
];

//con _. accedemos a las propiedades de la librería, VSC nos ofrece por autocompletado las que hay
//con _.groupBy agrupamos por una propiedad específica, en este caso role
const rta = _.groupBy(data, (item) => {
  return item.role;
});
console.log(rta);

//corremos el código en la terminal con node dist/17-lodash-library.js
