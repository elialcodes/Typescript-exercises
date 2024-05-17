"use strict";
(() => {
    let productTitle = 'My amazing product'; // Typescript infiere tipado de tipo string
    // productTitle = null;// si reasignamos la variable a null nos daría error
    // productTitle = () => {}; // si reasignamos la variable a función nos daría error
    // productTitle = 123; // si reasignamos la variable a number nos daría error
    productTitle = 'My amazing product changed'; //aquí no nos da error porque la reasignamos con tipado string
    console.log('productTitle', productTitle);
    const productDescription = "I'm bla bla ba bla"; //podemos usar comillas dobles (útiles si dentro hay comillas simples)
    console.log('productDescription', productDescription);
    let productPrice = 100;
    let isNew = false;
    //podemos usar template literals usando `` para indentar (poner sangrías al texto) y concatenar con otras variables con ${}
    const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
    console.log(summary); //nos devuelve todo como string
    const myString = ''; //si tipamos de forma explícita lo escribiremos con minúsculas
    console.log(myString);
    //const myString: String = ''; mala práctica
})();
//corremos el código en la terminal con node dist/06-strings.js
