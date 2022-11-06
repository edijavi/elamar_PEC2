function onlyEven(array) {
  const arrayOnlyEven = array.filter(
    (item) => item%2==0
  );

return arrayOnlyEven;
}

function onlyOneWord(array) {
  const arrayOnlyOneWord = array.filter(
    (item) => !item.match(/ /g)
  );

return arrayOnlyOneWord;
}

function positiveRowsOnly(array) {
  const arrayPositiveRowsOnly = array.filter((arr) => arr.filter((item) => item > -1).length === arr.length );

return arrayPositiveRowsOnly;

}

function allSameVowels(array) {
  const regExpVowels = /^[aeiou]/i;
  const arrayAllSameVowels = array.filter((str) => { 
    
    let newStr = "";
    for (let index = 0; index < str.length; index++) {
      const character = str[index]
      if (regExpVowels.test(character)) {
        newStr += character;
      }
    }
    return newStr;
  });

  return arrayAllSameVowels;
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
