const findOne = (list, { key, value }, { onSuccess, onError }) => {
  /* Se declara la función findOne en la cual se usa la notación 
   "function arrow", dicha función requiere de distintos parametros.
  Los parametros list del tipo array, y 2 objetos.
  Uno con una propiedad y valor de esta y otro con las funciones onSuccess, onError 
  */
  setTimeout(() => {
  /*
  Se llama a la funtion JavaScript setTimeout en la cual se le pasa una función en 
  notación "funtion arrow" y el parametro referente al tiempo en milisegundos que se esperará
  para su ejecución
  */
    const element = list.find(element => element[key] === value);
    /* la función a ejecutar guarda en const element el resultado de la busqueda del array list 
    usando el método find() disponible en Javascrip en el cual devuelve el primer elemento que cumple
    la función de comprobación en notación "arrow funtion" en la que se comprueba
    si algun elemento del array cumple con el nombre de la propiedad recibida y su valor 
    */
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    /*
    Si se ecuantra un elemento dentro del array se llama a la función onSuccess y se le pasa el parámetro const element
    Si no se encuentra un elemento en el array se llama a la función onError se le pasa un objeto como parámentro,
    dicho objeto tiene la propiedad msg y valor de la misma es 'ERROR: Element Not Found'
    */
  }, 2000);
  /* tiempo en milisegunados que tiene que esperar para ejecutarse la función anterior*/
};

const onSuccess = ({ name }) => console.log(`user: ${name}`);
/*
Se declara la función onSuccess en notación "arrow function" la cual requiere la propiedad de un objeto
llamada name y ejecuta el método console.log() en el que se le pasa un parámetro del tipo string 
el cual usa "template literals" para poder concatenar varias lineas valores del tipo string o uso de 
string interpolation `${name}`
*/
const onError = ({ msg }) => console.log(msg);
/*
Se declara la función OnError en notación "arrow function" la cual requiere el parámetro del tipo objeto
 con la propiedad msg la cual ejecuta el método console.log() y se le pasa el parámetro msg
*/

const users = [
  /*Se declará el array users que guarda 2 elementos del tipo objeto con 2 propiedades y sus respectivos valores */
  {
    name: 'Carlos',
    rol: 'Teacher'
  },
  {
    name: 'Ana',
    rol: 'Boss'
  }
];

console.log('findOne success');
//Ejecuta el método console.log() al cual se le pasa un parámetro del tipo string

findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
/* Se llama a la función findOne() al cual se le pasan el array users, 
el objeto con la propiedad 'name' y su valor 'Carlos' y un objeto con las funciones onSuccess y onError */

console.log('findOne error');
//Ejecuta el método console.log() al cual se le pasa un parámetro del tipo string

findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
/* Se llama a la función findOne() al cual se le pasan el array users, 
el objeto con la propiedad 'name' y su valor 'Fermin' y un objeto con las funciones onSuccess y onError */

//Expected result on screen:
/*
findOne success
findOne error
 //wait 2 seconds
user: Carlos
ERROR: Element Not Found
*/
