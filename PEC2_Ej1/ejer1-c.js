const findOne =  (list, { key, value }, { onSuccess, onError }) => {
  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      if (element) {
        resolve(element);
      } else {
        reject({ msg: 'ERROR: Element Not Found' });
      }    
    }, 2000);
  });
  
  async function promiseResult() {
    try {
      onSuccess(await result);
    } catch (error) {
      onError(error);
    }
  }
  promiseResult();
}

  const onSuccess = ({ name }) => console.log(`user: ${name}`);

  const onError = ({ msg }) => console.log(`${msg}`);

  
  const users = [
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
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  console.log('findOne error');
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
 

  
  //Expected result on screen:
  /*
  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found
  */
  