export function bubbleSort() {
  const t1 = [5, 4, 3, 2, 1];
  const t2 = [64, 34, 25, 12, 22, 11, 90];
  const t3 = [42];
  const t4 = [5, 1, 4, 2, 8, 5, 2];
  const t5 = [7, 7, 7, 7];
  const t6 = [1, 2, 3, 4, 5];

  b1(t1);
  /*
[5, 4, 3, 2, 1]

1st
5 > 4 = T Swap
[4, 5, 3, 2, 1]

2nd
5 > 3 = T Swap
[4, 3, 5, 2, 1]

Repeat for each number

- So for every iteration all large numbers bubble to the end of array
- if there is no swap in prev iteration then the array is sorted and no need of other iteration
- we can avoid checking last number after every iteration

BIG O

O(n^2)
Stable sort, items stay in same order if both are same
*/
  function b1(arr) {
    let isSwapped = false;
    let end = 0;

    do {
      isSwapped = false;
      for (let i = 1; i < arr.length - end; i++) {
        if (arr[i - 1] > arr[i]) {
          isSwapped = true;

          let temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
        }
        // console.log("el: " + i + " " + arr[i]);
      }
      end++;
    } while (isSwapped);
    console.log(arr);
  }
}
