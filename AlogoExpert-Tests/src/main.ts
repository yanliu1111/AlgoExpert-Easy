// remove export
// function sortedSquaredArray(array: number[]) {
//   let start = 0;
//   let end = array.length - 1;
//   let squareNums = [];
//   let numbersToBeSquaredCount = array.length;
//   while (numbersToBeSquaredCount > 0) {
//     if (Math.abs(array[start]) > Math.abs(array[end])) {
//       const square = Math.pow(array[start], 2);
//       squareNums.unshift(square);
//       start++;
//       console.log("!!", squareNums);
//     } else {
//       const square = Math.pow(array[end], 2);
//       squareNums.unshift(square);
//       end--;
//       console.log("??", squareNums);
//     }
//     numbersToBeSquaredCount--;
//   }
//   return squareNums;
// }
// console.log(sortedSquaredArray([-1, 0, 2]));

// function nonConstructibleChange(coins: number[]) {
//   coins.sort((a: number, b: number) => a - b);
//   let currentMax = 0;
//   for (const coin of coins) {
//     if (coin > currentMax + 1) return currentMax + 1;
//     currentMax += coin;
//   }
//   return currentMax + 1;
// }
// console.log(nonConstructibleChange([1, 2, 4, 5]));
interface Job {
  deadline: number;
  payment: number;
}

function optimalFreelancing(jobs: Job[]): number {
  let sum = 0;
  const parsedJobs = jobs.map((j, i) => ({ ...j, index: i }));

  for (let day = 7; day >= 1; day--) {
    const possibleJobs = parsedJobs.filter((j) => j.deadline >= day);
    const maxPayment = possibleJobs.reduce(
      (acc, curr) => (curr.payment > acc ? curr.payment : acc),
      0
    );
    const job = possibleJobs.find((j) => j.payment === maxPayment);
    if (job) {
      sum += job.payment;
      parsedJobs.splice(job.index, 1);
    }
  }
  return sum;
}

const jobs = [
  { deadline: 1, payment: 10 },
  { deadline: 2, payment: 15 },
  { deadline: 3, payment: 20 },
  { deadline: 2, payment: 5 },
  { deadline: 4, payment: 30 },
];

console.log(optimalFreelancing(jobs));
//write testing code just text
console.log('hello world');
