(() => {
  //cuando tenemos muchos argumentos en una función, es lógico pasarlos como objeto
  //llamaremos al objeto con el nombre genérico de data y :, le pasaremos que el tipado es un objeto {} y dentro el tipado de cada propiedad
  const login = (data: { email: string; password: number }) =>
    console.log(data.email, data.password); //accedemos a las propiedades del objeto y las imprimimos

  login({ email: 'nabascalc@gmail.com', password: 1234 }); //llamamos a la función pasando unos argumentos sobre la marcha

  const user = {
    email: 'noelia@gmail.com',
    password: 456,
  };

  login(user); //llamamos a la función pasando como argumento la constante user

  //creamos la función addProduct:
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL'; //alias y literal types

  const products: any[] = []; //aquí la constante es un array que contiene valores de cualquier tipo

  //creamos una función para añadir un producto con un objeto como argumento:
  const addProduct = (data: {
    title: string;
    created: Date;
    stock: number;
    size?: Sizes; //en los objetos también se puede hace que un parámetro sea opcional con el signo ?
  }) => {
    products.push(data); //se añadirán productos nuevos al array products
  };

  addProduct({ title: 'Product1', created: new Date(), stock: 8, size: 'M' }); //llamamos a la función y le pasamos como argumento un objeto respetando el tipado interior
  addProduct({ title: 'Product2', created: new Date(), stock: 5 }); //llamamos a la función y le pasamos como argumento un objeto respetando el tipado interior

  console.log(products); //nos devuelve el array con los 2 productos añadidos
})();

//corremos el código en la terminal con node dist/14-objects-in-functions.js
