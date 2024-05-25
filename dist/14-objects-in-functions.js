"use strict";
(() => {
    //cuando estamos declarando una función y tenemos muchos argumentos en ella, es lógico pasarlos como objeto
    //llamaremos al objeto con el nombre genérico de data:, le pasaremos que el tipado es un objeto {} y dentro el tipado de cada propiedad
    const login = (data) => console.log(data.email, data.password); //accedemos a las propiedades del objeto y las imprimimos
    login({ email: 'nabascalc@gmail.com', password: 1234 }); //llamamos a la función pasando unos argumentos sobre la marcha
    //constante que es un array que contiene valores de cualquier tipo
    const products = [];
    //creamos una función para añadir un producto con un objeto como argumento:
    const addProduct = (data) => {
        products.push(data); //se añadirán productos nuevos al array products
    };
    addProduct({ title: 'Product1', created: new Date(), stock: 8, size: 'M' }); //llamamos a la función y como argumento un objeto respetando el tipado interior
    addProduct({ title: 'Product2', created: new Date(), stock: 5 }); //llamamos a la función y como argumento un objeto respetando el tipado interior
    console.log(products); //nos devuelve el array con los 2 productos añadidos
})();
//corremos el código en la terminal con node dist/14-objects-in-functions.js
