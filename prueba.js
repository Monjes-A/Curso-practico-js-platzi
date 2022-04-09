console.time('s1');
const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
function calcularModa(arr) {
  const lista1Count = {};
  arr.map(function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  const lista1Array = Object.entries(lista1Count).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });

  return lista1Array[lista1Array.length - 1];
}

console.log(calcularModa(lista1));
console.log(lista1);
console.timeEnd('s1');

console.time('s2');
const List = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
function mode(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}
console.log(mode(List));
console.log(List);
console.timeEnd('s2');

console.time('s3');
const NUMBERS = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];
function calMode(arr) {
  const frequencyList = {};
  NUMBERS.forEach(
    (elem) => (frequencyList[elem] = frequencyList[elem] + 1 || 1)
  );

  return Object.entries(frequencyList)
    .sort((acc, newValue) => acc[1] - newValue[1])
    .pop();
}

console.log(calMode(NUMBERS));
console.log(NUMBERS);
console.timeEnd('s3');