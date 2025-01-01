// Optimal Freelancing
//O(nlog(n))n means number of jobs; time O(1) space
export function optimalFreelancing(
  jobs: { deadline: number; payment: number }[]
) {
  if (!jobs.length) return 0;
  // Sort jobs by payment in descending order
  jobs.sort((a, b) => b.payment - a.payment);
  const NUM_DAYS = 7;
  const jobsTokenDays = new Array(NUM_DAYS + 1).fill(false); // Index 1 to 7 for days
  let sum = 0;

  for (const job of jobs) {
    const { deadline, payment } = job;
    // Try to assign the job to the latest possible day before its deadline
    for (
      let possibleDay = Math.min(deadline, NUM_DAYS);
      possibleDay > 0;
      possibleDay--
    ) {
      if (jobsTokenDays[possibleDay]) continue; // Skip if the day is already token
      jobsTokenDays[possibleDay] = true; // Mark the day as token
      sum += payment;
      break;
    }
  }
  return sum;
}
