"use strict";
(() => {
    let isEnable = true; //aquí Typescript infiere un tipado bollean
    //  isEnable = 'Noelia'; //error, no podemos reasignarlo como string
    //  isEnable = 1212; //error, no podemos reasignarlo como number
    isEnable = false; //solo podríamos reasignar la variable como false
    let isNew = false; //tipado explícito a bollean
    console.log('isNew', isNew);
    isNew = true; //cambiamos el valor del boolean
    console.log('isNew', isNew);
    const random = Math.random(); //obtenemos un número aleatorio del 0 al 1 y typescritp infiere el tipado number
    console.log('random', random);
    isNew = random >= 0.5 ? true : false; //condicional ternario: si el número es >= que 0.5, la variable es true, si no devuelve false
    //isNew = random >= 0.5 ? "true" : "false"; //el condicional ternario devuelve error, isNew es boolean, no puede devolver string
    console.log('isNew', isNew);
    const myBoolean = true; //el tipado se escribe con minúsculas
    //const myBoolean: Boolean = true; //mala práctica
})();
//corremos el código en la terminal con node dist/05-bolleans.js
