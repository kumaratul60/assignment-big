export const winners = (tournament) => {
    return tournament.map(game => game.reduce((winner, player) => player.score > winner.score ? player : winner));
};