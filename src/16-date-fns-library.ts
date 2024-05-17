//vamos a trabajar con la librería date-fns, que tiene soporte para Typescript
//la instalamos con npm install date-fns --save
//nos importamos 2 funcionalidades: subDays y format

import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); //en js el 0=enero, 1=febrero...

//subDays es una función de la librería date-fns que sirve para restar fechas
//metemos la función en la contante rta (respuesta) y le pasamos como argumentos nuestra contante y le vamos a restar 30 días
const rta = subDays(date, 30);

//convertimos la respuesta a string:
const rtaString = format(rta, 'yyyy, mm, dd');

console.log(rtaString);

//corremos el código en la terminal con node dist/16-date-fns-library.js
