// Note:
// You're using splice on parsedJobs based on job.index, but the splice function directly modifies the array. As the array changes, the index values no longer align with the original array, causing unexpected results.

interface Job {
  deadline: number;
  payment: number;
}

export function optimalFreelancing(jobs: Job[]): number {
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

//   const jobs: Job[] = [1, 2, 3, 4, 5, 6, 7].map((d, i) => ({
//     deadline: d,
//     payment: i + 1,
//   }));
//   console.log(optimalFreelancing(jobs));

const newJobs = [
  { deadline: 1, payment: 10 },
  { deadline: 2, payment: 15 },
  { deadline: 3, payment: 20 },
  { deadline: 2, payment: 5 },
  { deadline: 4, payment: 30 },
];

console.log(optimalFreelancing(newJobs));

//edit one (20250101)
interface Job {
  deadline: number;
  payment: number;
}

export function optimalFreelancing2(jobs: Job[]): number {
  let sum = 0;

  // Sort jobs by payment in descending order
  const sortedJobs = jobs.sort((a, b) => b.payment - a.payment);

  // Track the availability of days (1 to 7)
  const daysTaken = new Array(8).fill(false); // Index 0 is unused for easier mapping

  for (const job of sortedJobs) {
    // Assign the job to the latest available day before its deadline
    for (let day = Math.min(job.deadline, 7); day >= 1; day--) {
      if (!daysTaken[day]) {
        daysTaken[day] = true; // Mark the day as taken
        sum += job.payment; // Add the job's payment to the total
        break;
      }
    }
  }

  return sum;
}
