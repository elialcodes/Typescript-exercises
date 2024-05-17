"use strict";
(() => {
    //creamos una función para crear un producto con formato JSON (lo que devuelva tendrá formato de objeto), le pasamos 4 parámetros y los tipamos sobre la marcha
    function createProductJson(title, created, stock, size) {
        return {
            title,
            created,
            stock,
            size,
        };
    }
    //metemos la función en una constante y le pasamos argumentos lógicos según los hemos tipado arriba, nos devolverá un objeto
    const product1 = createProductJson('P1', new Date(), 12, 'XL');
    console.log(product1); //imprimimos el objeto completo
    console.log(product1.title); //según escibimos, tras el . typescript nos autocompleta las propieades del objeto, lo que hace el código más seguro
    console.log(product1.created);
    console.log(product1.stock);
    console.log(product1.size);
    //creamos la misma función con arrow function
    //vamos a hacer que el parámetro sizes sea opcional con el signo ? (en una función normal también se puede poner como opcional un parámetro)
    //los parámetros opcionales se pondrán al final para que typescript no devuelva error
    const createProductJsonV2 = (title, created, stock, size) => {
        return {
            title,
            created,
            stock,
            size,
        };
    };
    //metemos la función en una constante y le pasamos argumentos lógicos, nos devolverá un objeto
    const product2 = createProductJsonV2('P2', new Date(), 5); //aquí no llamamos al argumento size;
    console.log(product2);
    console.log(product2.title);
    console.log(product2.created);
    console.log(product2.stock);
    console.log(product2.size); //devolverá undefined
})();
//corremos el código en la terminal con node dist/12-functions.js
