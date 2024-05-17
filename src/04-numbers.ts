(() => {
  let productPrice = 100; //tipado number inferido
  productPrice = 12; //tipado number obligatoriamente, pues ya está inferido arriba
  console.log('productPrice', productPrice);

  let customerAge: number = 28; //tipado number explícito o manual
  customerAge = customerAge + '1'; // typescript nos avisa de la suma de number y string, nos devuelve 281, pues js concatena 28 y "1"
  customerAge = customerAge + 1; // nos devuelve 29, pues suma 2 numbers
  console.log('customerAge', customerAge);

  let productInStock: number; //tipado number explícito o manual
  console.log('productInStock', productInStock); //error porque la variable no tiene asignado ningún valor, sólo el tipado y no sabe qué poner
  if (productInStock > 10) {
    console.log('is greater');
  }

  let discount = parseInt('100'); //con parseInt convertimos un string a number, esto funciona si el string tiene números y no empieza por 0
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply');
  } else {
    console.log('not apply');
  }

  let hex = 0xfff; //con 0x ya estamos infiriendo un tipado number hexagesimal
  console.log('hex', hex);
  //let hex1=0xffz; //error si en el número hexagesimal ponemos algo fuera del rango 0-9 y A-F (o a-f)
  let bin = 0b1010; // con 0b ya estamos infiriendo a la variable un tipado number binario
  console.log('bin', bin);
  //let bin1=0b1012; // error si en el número binario ponemos algo fuera del rango 1 0

  const myNumber: number = 10; //el tipado number se pondrá en minúsculas, para diferenciarlo del objeto Number:
  //const myNumber: Number = 10; //mala práctica ponerlo en mayúsculas
})();

//corremos el código en la terminal con node dist/04-numbers.js
