function multiplyBy10(array) {
 const arrayBy10 = array.map(
    (item)=> item*10
  )

  return arrayBy10;
}

function shiftRight(array) {
  const arrayShiftRight = array.map(
    (item, index) => {
      if (index === 0) {
        return array[array.length -1]
      } 
      return array[index-1]
    }
  );  

  return arrayShiftRight;
}

function onlyVowels(array) {
  const regExpVowels = /^[aeiou]/i;
  const arrayonlyVowels = array.map((str) => { 
    let newStr = "";
    for (let index = 0; index < str.length; index++) {
      const character = str[index]
      if (regExpVowels.test(character)) {
        newStr += character;
      }
    }
    return newStr;
  });

  return arrayonlyVowels;
}

function doubleMatrix(array) {
  const arraydoubleMatrix = array.map(
    (arr) => arr.map((item) => item*2)
  );

  return arraydoubleMatrix;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
