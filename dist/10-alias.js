"use strict";
(() => {
    let user; //así escribíamos los union types, dando a la variable varios tipados.
    let userId; //damos a la variable el tipado que hemos diseñado
    userId = 'Noelia'; //no nos da error
    userId = 100; //no nos da error
    userId = true; //no nos da error
    //función donde pasamos como parámetro la variable con tipado del alias de la línea 5:
    function greeting(userId) {
        if (typeof userId === 'string') {
            console.log(`string, ${userId.toLowerCase()}`);
        }
        else if (typeof userId === 'number') {
            console.log(`number, ${userId.toFixed(2)}`);
        }
        else {
            console.log(`boolean, ${userId}`);
        }
    }
    greeting('NOELIA'); //al llamar a la función pasamos como argumento un string y no da error
    greeting(100.1234); //al llamar a la función pasamos como argumento un number y no da error
    greeting(true); //al llamar a la función pasamos como argumento un bollean y no da error
    //Literal types: establecemos valores literales para la variable, sólo pueden ser esos valores:
    let shirtSize;
    shirtSize = 'S'; //ok
    shirtSize = 'M'; //ok
    let teeSizes; // damos el alias a la variable
    teeSizes = 'S'; //ok
    teeSizes = 'M'; //ok
    //teeSizes = "s"; //error poque está en minúsculas
    //teeSizes= 1234; //error porque no coincide nada
    //función donde pasamos como parámetros variables con tipados establecidos por nosotros:
    function sizing(userId, teeSizes) {
        if (typeof userId === 'string' || typeof userId === 'number') {
            console.log(`usuario: ${userId}, talla:${teeSizes}`);
        }
    }
    sizing('NOELIA', '2XL'); //la función devuelve un resultado correcto porque ambos argumentos tiene el tipado correcto
    sizing(1111, 'L'); //la función devuelve un resultado correcto porque ambos argumentos tiene el tipado correcto
    // sizing('Silvia', '2XLL'); //error, porque el argumento "2XLL" y no estaba dentro de los literales establecidos
    // sizing('Marta', [1, 2, 3]); //error, porque el argumento [] y no estaba dentro de los literales establecidos
    // sizing([], 'XS'); //error, porque el argumento [] y no estaba dentro de los literales establecidos
})();
//corremos el código en la terminal con node dist/10-alias.js
