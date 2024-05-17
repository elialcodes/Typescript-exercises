"use strict";
(() => {
    let userId; //tipado explícito (no inferido) con Union type para personalizarlo a dos tipos de datos que queramos: string y number.
    userId = 1212;
    userId = 'Noelia';
    function greeting(myText) {
        //pasamos como argumento de la función una variable que tipamos sobre la marcha y será dinámica: string o number
        if (typeof myText === 'string') {
            console.log(`string ${myText.toUpperCase()}`); //si la variable es string aplicamos los métodos de un string
        }
        else {
            console.log(`number ${myText.toFixed(1)}`); //si la variable es number aplicamos los métodos de un number
        }
    }
    greeting('Nicolas');
    greeting(12.1212121212);
})();
//corremos el código en la terminal con node dist/09-union-types.js
