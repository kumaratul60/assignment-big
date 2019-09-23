export const split = players => {
    let result = [];
    let teams = Math.floor(players.length / (players.length / 2));

    while (players.length) {
        result.push(players.splice(0, teams));
    }

    return result;
};