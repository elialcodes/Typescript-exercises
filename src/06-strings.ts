(() => {
  let productTitle = 'My amazing product'; // Typescript infiere tipado de string
  // productTitle = null;// si reasignamos la variable a null nos daría error
  // productTitle = () => {}; // si reasignamos la variable a función nos daría error
  // productTitle = 123; // si reasignamos la variable a number nos daría error
  productTitle = 'My amazing product changed'; //aquí no nos da error porque la reasignamos con tipado string
  console.log('productTitle', productTitle);

  const productDescription = "I'm bla bla ba bla"; //podemos usar comillas dobles (útiles si dentro hay comillas simples)
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  //podemos usar template literals usando `` para indentar (poner sangrías al texto) y ${} para concatenar con otras variables
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary); //nos devuelve todo como string

  const myString: string = 'esto es un string'; //si tipamos de forma explícita lo escribiremos con minúsculas
  console.log(myString);
  //const myString: String = 'esto es un string'; mala práctica
})();

//corremos el código en la terminal con node dist/06-strings.js
