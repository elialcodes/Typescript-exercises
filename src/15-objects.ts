(() => {
  //creamos la función addProduct:
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL'; //alias y literal types

  type Product = { title: string; created: Date; stock: number; size?: Sizes }; // con alias personalizamos un tipado de objeto y dentro tipamos sus propiedades

  const products: Product[] = []; //aquí la constante será un array de objetos que tienen que cumplir con el tipado de Product

  //creamos una función con el argumento data y data lo tipamos con el alias type Product de la línea 5
  //con esta función se añadirán productos nuevos al array products
  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({ title: 'Product1', created: new Date(), stock: 8, size: 'M' }); //llamamos a la función y le pasamos como argumento un objeto respetando el tipado interior
  addProduct({ title: 'Product2', created: new Date(), stock: 5 }); //llamamos a la función y le pasamos como argumento un objeto respetando el tipado interior

  console.log(products); //nos devuelve el array con los 2 productos añadidos
})();

//corremos el código en la terminal con node dist/15-objects.js
