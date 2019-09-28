export const winners = (games) => {
    let result = games.map(game => game.reduce((winner, player) => player.score > winner.score ? player : winner));
    return result;
};