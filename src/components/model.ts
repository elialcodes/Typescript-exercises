//este archivo tendremos el tipado de los datos

//con el export delante, indicamos que estos tipados se pueden exportar a otros archivos:
export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | '2XL'; //alias y literal types

export type Product = { title: string; created: Date; stock: number; size?: Sizes }; // con alias personalizamos un tipado de objeto y dentro tipamos sus propiedades
