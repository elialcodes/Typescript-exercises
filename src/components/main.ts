//este archivo ejecuta todo

import { addProduct, calculateStock, products } from './service'; //importamos las dos funciones y el array

//llamamos a la función y pasamos como argumento un objeto respetando el tipado definido en model.ts, importado en service.ts y como consecuencia importado en main.ts
addProduct({ title: 'Product1', created: new Date(), stock: 8, size: 'M' });
addProduct({ title: 'Product2', created: new Date(), stock: 5 });

console.log(products); //nos devuelve el array con 2 objetos

const total = calculateStock();

console.log(total); //nos devuelve la suma del stock de los artículos de products

//corremos el código en la terminal con node dist/components/main.js
