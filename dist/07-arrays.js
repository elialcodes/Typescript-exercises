"use strict";
() => {
    let prices = [1, 2, 2, 1, 1, 212]; //Typescript infiere el tipado array con el motor de inferencia, y el array podrá contener solo numbers
    prices.push(121212); //añadimos un number
    // prices.push('asas'); //daría error, pues estamos añadiendo un string
    // prices.push(true); //daría error, pues estamos añadiendo un boolean
    // prices.push({}); //daría error, pues estamos añadiendo un objeto
    let newPrices = [1, 2, 2, 1, 1, 212, 'hola', true]; //Typescript infiere el tipado array con el motor de inferencia, el array podrá contener numbers, strings y bolleans
    let products = ['hola', true]; //Typescript infiere el tipado array con el motor de inferencia, el array podrá conteneer strings y booleans
    products.push(false);
    let mixed = ['hola', true]; //aquí hacemos el tipado explícito estableciendo que el tipado puede ser
    //de number, string, boolean y object y que además es un array [], y luego damos valor a la variable
    mixed.push(12); //no nos devuelve error
    mixed.push('as'); //no nos devuelve error
    mixed.push(true); //no nos devuelve error
    mixed.push({}); //no nos devuelve error
    mixed.push([]); //no nos devuelve error
    let numbers = [1, 2];
    numbers.map((item) => item * 2);
    //los métodos funcionales de array nos devolverán o no error según el tipado de los datos, aquí no da error porque
    //estamos multiplicando cada item del array (números) * 2
};
//corremos el código en la terminal con node dist/07-arrays.js
