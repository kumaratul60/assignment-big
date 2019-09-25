export const winners = (tournament, winningScore) => {
    let result = [];
    tournament.map(game => game.filter(player => player.score === winningScore ? result.push(player) : null));
    return result;
};