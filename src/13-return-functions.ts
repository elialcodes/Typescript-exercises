(() => {
  //tenemos una función que va a devolver con un reduce la suma de los elementos del array
  //tiene como argumento prices, que lo tipamos como un array con numbers dentro
  //Typescript nos inferirá por defecto que, si el argumento es un array de numbers, el retorno de la función va a ser un number también
  //pero podemos ponerlo de forma explícita con : number detrás de los argumentos
  //si pusiéramos : string nos Typescript nos devuelve error porque no le cuadra ya que el array es de numbers
  //la función tiene un return explícito con la palabra return
  const calculateTotal = (prices: number[]): number => {
    return prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };

  //aquí tenemos otra función que nos imprime un console.log de la anterior función, pero no retorna nada, no tiene return escrito,
  //así que su return para typescript es void (vacío)
  //podremos dejarlo así o ponerlo explícitamente el tipado del retorno como en la función de arriba, con : void después de los argumentos,
  //y si por equivocación ponemos un return en la función, typescript nos devolvería error
  const printTotal = (prices: number[]) => {
    const rta = calculateTotal(prices);
    console.log(`El total es ${rta}`);
  };

  printTotal([10, 20, 30, 40]); //aquí el retono de la función es void, porque no retorna nada de verdad
})();

//corremos el código en la terminal con node dist/13-return-functions.js
