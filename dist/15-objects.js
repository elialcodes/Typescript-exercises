"use strict";
(() => {
    //así se tiparía explícitamente un objeto sin alias
    const user = {
        name: 'Elena',
        lastName: 'Iglesias',
        pin: 1234,
    };
    console.log(user);
    //aquí la constante será un array vacío, cuyo tipado es un array de objetos que tienen que cumplir con el tipado de Product
    const products = [];
    //creamos una función con el argumento data y data lo tipamos con el alias type Product de la línea 16
    //con esta función se añadirán productos nuevos al array products
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({ title: 'Product1', created: new Date(), stock: 8, size: 'M' }); //llamamos a la función y le pasamos como argumento un objeto respetando el tipado interior
    addProduct({ title: 'Product2', created: new Date(), stock: 5 }); //llamamos a la función y le pasamos como argumento un objeto respetando el tipado interior
    console.log(products); //nos devuelve el array con los 2 productos añadidos
})();
//corremos el código en la terminal con node dist/15-objects.js
