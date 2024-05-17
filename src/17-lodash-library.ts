//trabajamos con la librería lodash, que no soporta Typescript

//así se implementaría la librería según viene en la documentación:
//var _ = require('lodash');

//así sería si importamos la librería, pero typescript nos da error y nos hace una sugerencia si nos posicionamos encima con el ratón,
//nos indica poner esto en la terminal: npm install --save-dev @types/lodash
//al hacerlo desaparece el error
import _ from 'lodash';

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
//con _.groupBy agrupará por una propiedad específica, en este caso role
const rta = _.groupBy(data, (item) => {
  item.role;
});
console.log(rta);

//corremos el código en la terminal con node dist/17-lodash-library.js
