export function insertionSort() {
  const t1 = [5, 4, 3, 2, 1];
  const t2 = [64, 34, 25, 12, 22, 11, 90];
  const t3 = [42];
  const t4 = [5, 1, 4, 2, 8, 5, 2];
  const t5 = [7, 7, 7, 7];
  const t6 = [1, 2, 3, 4, 5];

  i1(t4);

  /*
[5, 4, 3, 2, 1]

- for every iteration insert the number in the correct position in 0-j array
*/
  function i1(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToBeInserted = arr[i];
      let j;
      for (j = i - 1; j >= 0, arr[j] > numberToBeInserted; j--) {
        // if (arr[j] > numberToBeInserted) {
        arr[j + 1] = arr[j];
        // }
      }
      arr[j + 1] = numberToBeInserted;
    }
    console.log(`Final: ${arr}`);
  }
}
