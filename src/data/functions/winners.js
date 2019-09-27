export const winners = (tournament) => {
    let result = tournament.map(game => game.reduce((winner, player) => player.score > winner.score ? player : winner));
    return result;
};