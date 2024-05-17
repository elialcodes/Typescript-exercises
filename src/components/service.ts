//en este archivo tendremos la lógica del código

import { Product } from './model'; //importamos el alias Product

export const products: Product[] = []; //constante que exportamos y que será un array de objetos que tienen que cumplir con el tipado importado Product

//función que exportamos y que sirve para añadir productos nuevos al array products
//pasamos como argumento data y data lo tipamos con el alias Products
export const addProduct = (data: Product) => {
  products.push(data);
};

//función que exportamos y que sirve para calcular el stock total de products
//tipamos explícitamente el return, le decimos que tiene que devolver : number
export const calculateStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
};
