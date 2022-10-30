const findOne =  (list, { key, value }, { onSuccess, onError }) => {
/* 
Se define la función findOne en la cual se usa la notación 
"function arrow", dicha función requiere de distintos parametros.
Los parametros list del tipo array, y 2 objetos.
Uno con una propiedad y valor de esta y otro con las funciones onSuccess, onError 
*/
  const result = new Promise((resolve, reject) => {
  /*
  Se define const result en la que de guarda un objeto Promise en el que  representa la 
  finalización o fallo de la operación de busqueda y el valor que resulta de dicha operación
  */  
    setTimeout(() => {
    /*
    Se llama al Método JavaScript setTimeout en el cual se le pasa una función en 
    notación "funtion arrow" y el parametro referente al tiempo en milisegundos que se esperará
    para su ejecución
    */
      const element = list.find(element => element[key] === value);
      /* 
      Se define const element el cuál guarda resultado de la busqueda del array list 
      usando el método find() disponible en Javascrip en el cual devuelve el primer elemento que cumple
      la función de comprobación en notación "arrow funtion" en la que se comprueba
      si algun elemento del array cumple con el nombre de la propiedad recibida y su valor 
      */
      if (element) {
        resolve(element);
      } else {
        reject({ msg: 'ERROR: Element Not Found' });
      }
      /* 
      Sentencia If/Else. Si se ecuantra un elemento dentro del array, la promesa  finaliza devolviendo el parámetro element
      Si no se encuentra un elemento en el array se la promesa indica un fallo y devuelve un objeto como parámentro,
      dicho objeto tiene la propiedad msg y valor de la misma es 'ERROR: Element Not Found'
      */  
    }, 2000);
    //Tiempo en milisegunados que tiene que esperar para ejecutarse todo lo anterior
  });
  
  async function promiseResult() {
  /* 
  Se define la función async promiseResult en la cual se hace uso de await dentro de la función 
  para poder tener disponible el valor del objeto promesa result  y poder usarlo dentro try catch.
  */
    try {
      onSuccess(await result);
    } catch (error) {
      onError(error);
    }
  }

  promiseResult();
  //Se llama a la funtión async await que anteriormente se definió
}

  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  /*
  Se define la función onSuccess en notación "arrow function" la cual requiere la propiedad de un objeto
  llamada name y ejecuta el método console.log() en el que se le pasa un parámetro del tipo string 
  el cual usa "template literals" para poder concatenar varias lineas valores del tipo string o uso de 
  string interpolation `${name}`
  */

  const onError = ({ msg }) => console.log(`${msg}`);
  /*
  Se define la función OnError en notación "arrow function" la cual requiere el parámetro del tipo objeto
  con la propiedad msg la cual ejecuta el método console.log() y se le pasa el parámetro msg
  */

  const users = [
  // Se define el array users que guarda 2 elementos del tipo objeto con 2 propiedades y sus respectivos valores */
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
  /* 
  Se llama a la función findOne() al cual se le pasan el array users, 
  el objeto con la propiedad 'name' y su valor 'Carlos' y un objeto con las funciones onSuccess y onError 
  */

  console.log('findOne error');
  // Ejecuta el método console.log() al cual se le pasa un parámetro del tipo string

  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  /* 
  Se llama a la función findOne() al cual se le pasan el array users, 
  el objeto con la propiedad 'name' y su valor 'Fermin' y un objeto con las funciones onSuccess y onError 
  */

  //Expected result on screen:
  /*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
  