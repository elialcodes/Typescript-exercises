(() => {
  let myDynamicVar: any; //tipado explícito a any, que significa cualquier valor, rompe la rigurosidad que supone el tipado de typescript
  //a continuación la variable adopta varios tipados sin devolver error:
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';
  myDynamicVar = 'hola';

  //CAST: conversión forzosa de la variable a un tipado concreto. Dos sintaxis: as y < >:

  //1, CAST que utiliza "as" para convertir la variable a dato primitivo string y que VSC nos saque por defecto métodos string
  const rta = (myDynamicVar as string).toUpperCase();
  console.log(rta);

  //2, CAST que utiliza < > para convertir la variable a dato primitivo number y que VSC nos saque por defecto métodos number
  myDynamicVar = 12.123;
  const rta2 = (<number>myDynamicVar).toFixed(1);
  console.log(rta2);
})();

//corremos el código en la terminal con node dist/08-any.js
