let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]){
      let posicao = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = posicao;
    }
  }
}
console.log (numbers)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < numbers.length; secondIndex += 1) {
    if (numbers[secondIndex] < numbers[index]){
      let posicao = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = posicao;
    }
  }
}
console.log (numbers)