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
