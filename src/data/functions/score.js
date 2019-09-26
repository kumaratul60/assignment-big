/*
 * Score functions *
 ***********/

const findGame = (array, id) => (array.filter(game => game.find(player => player.id === id)))[0];

const findGameIndex = (array, id) => array.findIndex(game => game.find(player => player.id === id));

const findPlayerIndex = (array, id) => array.findIndex(player => player.id === id);

const findPlayerAltIndex = (array, id) => array.findIndex(player => player.id !== id);

const findOpponentScore = (array, gameIndex, playerAltIndex) => array[gameIndex][playerAltIndex].score;

const hasOpponentPlayed = (array, gameIndex, playerAltIndex) => array[gameIndex][playerAltIndex].played;

const validateScore = (newScore, altScore, winningScore, played) => {
    let check1 = Math.abs(newScore - altScore) >= 2;

    let check2 = ((newScore >= winningScore) || (altScore >= winningScore));

    let check3 = newScore >= 0;

    let check4 = newScore > altScore && altScore >= winningScore ? !(newScore > altScore && Math.abs(newScore - altScore) > 2) : true;

    let check5 = newScore > altScore && altScore < winningScore ? !(newScore > winningScore && Math.abs(newScore - altScore) > 2) : true;

    let check6 = altScore > winningScore ? Math.abs(newScore - altScore) === 2 : true;

    let check7 = !(newScore === 0 && altScore === 0);

    console.log(check1, check2, check3, check4, check5, check6, check7);

    return played ? !(check1 && check2 && check3 && check4 && check5 && check6 && check7) : !(check3);
}

// all-in-one validation function to be exported and used in Score component
export const valid = (tournament, newScore, winningScore, id) => {
    let gameArray = findGame(tournament, id);
    let gameIndex = findGameIndex(tournament, id);
    let playerAltIndex = findPlayerAltIndex(gameArray, id);
    let playerAltScore = findOpponentScore(tournament, gameIndex, playerAltIndex);
    let playerAltPlayed = hasOpponentPlayed(tournament, gameIndex, playerAltIndex);
    return validateScore(+newScore, +playerAltScore, winningScore, playerAltPlayed);
};

// all-in-one function to return a copy of tournament array with new score added
export const newTournamentArray = (tournament, id, score) => {
    let gameArray = findGame(tournament, id);
    let gameIndex = findGameIndex(tournament, id);
    let playerIndex = findPlayerIndex(gameArray, id);
    let copyTournament = [...tournament];
    copyTournament[gameIndex][playerIndex].score = score;
    copyTournament[gameIndex][playerIndex].played = true;
    return copyTournament;
};