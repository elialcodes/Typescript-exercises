"use strict";
//trabajamos con la librería lodash, que no soporta Typescript
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//así se implementaría la librería según viene en la documentación:
//var _ = require('lodash');
//así sería si importamos la librería, pero typescript nos da error y nos hace una sugerencia si nos posicionamos encima con el ratón,
//nos indica poner esto en la terminal: npm install --save-dev @types/lodash
//al hacerlo desaparece el error
const lodash_1 = __importDefault(require("lodash"));
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
const rta = lodash_1.default.groupBy(data, (item) => {
    item.role;
});
console.log(rta);
//corremos el código en la terminal con node dist/17-lodash-library.js
