export const winners = (tournament, winningScore) => {
    return tournament.map(game => game.reduce((winner, player) => player.score > winner.score ? player : winner));
};