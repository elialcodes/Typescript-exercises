"use strict";
(() => {
    let myProductName = 'Product 1'; //aquí el motor de inferencia de Typescript le inferirá un tipado de string
    let myProductPrice = 123; //aquí el motor de inferencia de Typescript le inferirá un tipado de number
    myProductName = 'change'; //aquí estaremos obligados a poner string, porque TS ya le ha inferido ese tipado, si no, da error
    myProductName.toLowerCase(); //VSC nos permitirá completar con métodos para este tipo de dato, en este caso string
    myProductPrice.toFixed(); //VSC nos permitirá completar con métodos para este tipo de dato, en este caso number
    const myProductStock = 1000; //aquí ya no tenemos let, sino const, así que ni el tipado ni el valor podrá cambiar
    const myProductName2 = 'Product 1'; //aquí ya no tenemos let, sino const, así que ni el tipado ni el valor podrá cambiar
})();
