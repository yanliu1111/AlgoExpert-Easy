function insertionSort(array: number[]) {
  let i = 1;
  let j = 0;
  let temp = 0;
  while (i < array.length) {
    j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
    i++;
  }
  return array;
}

// function insertionSort(array: number[]) {
//     for (let i = 1; i < array.length; i++) {
//         let j = i;
//         while (j > 0 && array[j] < array[j - 1]) {
//             const temp = array[j];
//             array[j] = array[j - 1];
//             array[j - 1] = temp;
//             j--;
//         }
//     }
console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
