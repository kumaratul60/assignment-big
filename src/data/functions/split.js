// the purpose of this function to split an array into chunks
// the application of this functon is to split an array of player objects into multiple games

export const split = (players) => {
  let result = [];
  let teams = Math.floor(players.length / (players.length / 2));

  while (players.length) {
    result.push(players.splice(0, teams));
  }

  return result;
};
