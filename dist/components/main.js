"use strict";
//este archivo ejecuta todo
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service"); //importamos las dos funciones y el array
//llamamos a la función y pasamos como argumento un objeto respetando el tipado definido en model.ts, importado en service.ts y como consecuencia importado en main.ts
(0, service_1.addProduct)({ title: 'Product1', created: new Date(), stock: 8, size: 'M' });
(0, service_1.addProduct)({ title: 'Product2', created: new Date(), stock: 5 });
console.log(service_1.products); //nos devuelve el array con 2 objetos
const total = (0, service_1.calculateStock)();
console.log(total); //nos devuelve la suma del stock de los artículos de products
//corremos el código en la terminal con node dist/components/main.js
