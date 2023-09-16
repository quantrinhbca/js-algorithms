// You’re given a non-empty array of positive integers representing the amount of time that specific queries take to execute.
//Write a function that returns the minimum amount of total waiting time for all of the queries

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let minimumWaitingTime = 0;

  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    minimumWaitingTime += duration * queriesLeft;
  }

  return minimumWaitingTime;
}
