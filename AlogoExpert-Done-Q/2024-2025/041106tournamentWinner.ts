//tournamentwinner
export function tournamentWinner(competitions: string[][], results: number[]) {
  const scores: { [key: string]: number } = {};
  let winningTeam;
  let winningTeamScore = 0;
  for (let i = 0; i < competitions.length; i++) {
    let homeTeam: string = competitions[i][0];
    let awayTeam: string = competitions[i][1];
    addTeam(homeTeam);
    addTeam(awayTeam);
    let winner: string = results[i] === 0 ? awayTeam : homeTeam;
    scores[winner] += 3;
    if (scores[winner] > winningTeamScore) {
      winningTeamScore = scores[winner];
      winningTeam = winner;
    }
  }
  function addTeam(team: string) {
    if (scores.hasOwnProperty(team)) return;
    scores[team] = 0;
  }
  return winningTeam;
}
