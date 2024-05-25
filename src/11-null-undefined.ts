(() => {
  //en el caso variables null y undefined, Typescript infiere el tipado any
  let null01 = null; //infiere un tipado any
  let undefined01 = undefined; //infiere un tipado any

  //para que deje de ser any, tenemos que tiparlo explícitamente como null o undefined
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  //utilizamos union types para combinar tipos y que la variable sea inicializada como null y más tarde sea de un tipo determinado
  //(nos puede pasar en frameworks con componentes dinámicos como React o Angular, durante un breve instante la variable será null
  //y al levantarse se convertirá a otro tipado):
  let myNumber: null | number = null;
  myNumber = 12;
  myNumber = null;

  //utilizamos union types para combinar tipos y que la variable sea inicializada como un undefined y más tarde ser de un tipo determinado:
  let myString: undefined | string = undefined;
  myString = 'Noelia';
  myString = undefined;

  //función donde pasamos un parámetro que puede ser, por union types, null o string
  function hi(name: null | string) {
    let hello = 'Hola ';
    if (name) {
      //aquí name puede ser null o string
      hello += name; //aquí name ya sólo es string por que el condicional le dice: "si name existe,..." (entonces ya no es null)
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hi('Noelia');
  hi(null);

  //función donde hacemos lo mismo pero con menos líneas de código: le pasamos un OPTIONAL CHAINING que verifica si algo es nulo o undefined con el signo ?:
  //verifica si name tiene un valor válido (si no es null), y si es así le aplica el método para ponerlo en minúsculas y se añade a la variable hello
  //si name es null, añade "nobody" a la variable hello
  function hiVersion2(name: null | string) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiVersion2('NOELIA');
  hiVersion2(null);
})();

//corremos el código en la terminal con node dist/11-null-undefined.js
