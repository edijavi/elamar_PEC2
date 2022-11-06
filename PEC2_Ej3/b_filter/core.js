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
  // your code here
}

function allSameVowels(array) {
  // your code here
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
