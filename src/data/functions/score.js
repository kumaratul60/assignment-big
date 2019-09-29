// Score functions

// perhaps the most complex part of the app 
// it involves traversing a multi - dimensional array which is a multi-step process
// for a better explanation of these functions, see "./score.notes.js"

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

    return played ? (check1 && check2 && check3 && check4 && check5 && check6 && check7) : (check3);
}

// all-in-one validation function to be exported and used in Score component
export const valid = (games, newScore, winningScore, id) => {
    let gameArray = findGame(games, id);
    let gameIndex = findGameIndex(games, id);
    let playerAltIndex = findPlayerAltIndex(gameArray, id);
    let playerAltScore = findOpponentScore(games, gameIndex, playerAltIndex);
    let playerAltPlayed = hasOpponentPlayed(games, gameIndex, playerAltIndex);

    return validateScore(newScore, playerAltScore, winningScore, playerAltPlayed);
};

// all-in-one function to return a copy of games array with new score added
export const newGames = (games, id, score) => {
    let gameArray = findGame(games, id);
    let gameIndex = findGameIndex(games, id);
    let playerIndex = findPlayerIndex(gameArray, id);
    let copyGames = [...games];
    copyGames[gameIndex][playerIndex].score = score;
    copyGames[gameIndex][playerIndex].played = true;

    return copyGames;
};