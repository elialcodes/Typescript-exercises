"use strict";
//trabajamos con la librería no tipada lodash, que tiene muchas funciones que complementan Javascript,
//pero que no soporta Typescript
Object.defineProperty(exports, "__esModule", { value: true });
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
