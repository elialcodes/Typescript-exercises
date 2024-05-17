"use strict";
//en este archivo tendremos la lógica del código
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateStock = exports.addProduct = exports.products = void 0;
exports.products = []; //constante que exportamos y que será un array de objetos que tienen que cumplir con el tipado importado Product
//función que exportamos y que sirve para añadir productos nuevos al array products
//pasamos como argumento data y data lo tipamos con el alias Products
const addProduct = (data) => {
    exports.products.push(data);
};
exports.addProduct = addProduct;
//función que exportamos y que sirve para calcular el stock total de products
//tipamos explícitamente el return, le decimos que tiene que devolver : number
const calculateStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock;
    });
    return total;
};
exports.calculateStock = calculateStock;
