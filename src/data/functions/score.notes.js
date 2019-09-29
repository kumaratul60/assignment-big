// Score Logic
// This document shows my testing process for adding scores to state and score validation

// Sample games array 
let games = [
    [
        { id: 3, name: 'Susan', editMode: false, score: 0 },
        { id: 2, name: 'Richard', editMode: false, score: 11 }
    ],
    [
        { id: 4, name: 'Peter', editMode: false, score: 0 },
        { id: 5, name: 'Rick', editMode: false, score: 0 }
    ],
    [
        { id: 0, name: 'Jonathan', editMode: false, score: 19 },
        { id: 7, name: 'Joan', editMode: false, score: 0 }
    ],
];

// return the game array that contains a specific player
const findGame = (array, id) => (array.filter(game => game.find(player => player.id === id)))[0];
// return a player object by the player id 
const findPlayer = (array, id) => array.find(player => player.id === id);
// search the games array and return the index position of the sub-array that contains a specific player
const findGameIndex = (array, id) => array.findIndex(game => game.find(player => player.id === id));
// search the game array within the games array and return the index position of a specific player 
const findPlayerIndex = (array, id) => array.findIndex(player => player.id === id);
// return the index position of the opponent
const findPlayerAltIndex = (array, id) => array.findIndex(player => player.id !== id);

let id = 7; // player id for testing 
let winningScore = 21; // winning score for testing 

// store the return values of the above functions in variables
let gameArray = findGame(games, id);
let playerObj = findPlayer(gameArray, id);
let gameIndex = findGameIndex(games, id);
let playerIndex = findPlayerIndex(gameArray, id);
let playerAltIndex = findPlayerAltIndex(gameArray, id);

// use the spread operator to create a new version of the games array
let copyGames = [...games];
// use the variables stored above to update the score of a specific player
copyGames[gameIndex][playerIndex].score = 21;

// return the score of player's opponent to compare it to the score being added 
const findOpponentScore = (array, gameIndex, playerAltIndex) => array[gameIndex][playerAltIndex].score;

// store the opponent score in a variable 
let playerAltScore = findOpponentScore(copyGames, gameIndex, playerAltIndex);

// score validation algorithm 
const validateScore = (newScore, altScore, winningScore) => {
    return (
        // difference between scores is at least 2
        Math.abs(newScore - altScore) >= 2 
        &&
        // at least one of the players has a winning score
        ((newScore >= winningScore) || (altScore >= winningScore))
        &&
        // new score must be greater than or equal to 0
        newScore >= 0
        &&
        // new score cannot be empty
        newScore !== ""
    )
}

// all-in-one validation function to be exported and used in Score component
const valid = (games, newScore, winningScore, id) => {
    let gameArray = findGame(games, id);
    let gameIndex = findGameIndex(games, id);
    let playerAltIndex = findPlayerAltIndex(gameArray, id);
    let playerAltScore = findOpponentScore(games, gameIndex, playerAltIndex);
    return validateScore(+newScore, +playerAltScore, winningScore);
};

// all-in-one function to return a copy of games array with new score added
const newGames = (games, id, score) => {
    let gameArray = findGame(games, id);
    let gameIndex = findGameIndex(games, id);
    let playerIndex = findPlayerIndex(gameArray, id);
    let copyGames = [...games];
    copyGames[gameIndex][playerIndex].score = score;
    return copyGames;
};

// Testing 

console.log(`Find game with player id ${id}:`, gameArray, `\n`);
// Find game with player id 5: [
//     { id: 4, name: 'Peter', editMode: false, score: 0 },
//     { id: 5, name: 'Rick', editMode: false, score: 21 }
// ] 
console.log(`Find player with id ${id}:`, playerObj, `\n`);
// Find player with id 5: { id: 5, name: 'Rick', editMode: false, score: 21 } 
console.log(`Find array index of game with player id ${id}:`, gameIndex, `\n`);
// Find array index of game with player id 5: 1 
console.log(`Find array index with player id ${id} within child array:`, playerIndex, `\n`);
// Find array index with player id 5 within child array: 1 
console.log(`new score for player id ${id}:`, (games[gameIndex])[playerIndex].score, `\n`);
// new score for player id 5: 21 
console.log("return games with updated score:", `\n`, copyGames);
// return games with updated score:
// [
//     [
//         { id: 3, name: 'Susan', editMode: false, score: 0 },
//         { id: 2, name: 'Richard', editMode: false, score: 0 }
//     ],
//     [
//         { id: 4, name: 'Peter', editMode: false, score: 0 },
//         { id: 5, name: 'Rick', editMode: false, score: 21 }
//     ],
//     [
//         { id: 0, name: 'Jonathan', editMode: false, score: 0 },
//         { id: 7, name: 'Joan', editMode: false, score: 0 }
//     ]
// ]
console.log(`Find array index for game opponent to player id ${id}:`, playerAltIndex);
console.log("Return opponent score:", playerAltScore);

// Test validiate function 
console.log(`Validate scores 21, 17: expected output: true, actual output: `, validateScore(21, 17, winningScore));
console.log(`Validate scores 15, 17: expected output: false, actual output: `, validateScore(15, 17, winningScore));
console.log(`Validate scores -1, 20: expected output: false, actual output: `, validateScore(-1, 20, winningScore));
console.log(`Validate scores 21, 20: expected output: false, actual output: `, validateScore(21, 20, winningScore));
console.log(`Validate scores 21, "": expected output: true, actual output: `, validateScore(21, "", winningScore));

// Test all-in-one validiate function 
console.log(`Alt score (${playerAltScore}), New score (...), Is valid?`, valid(copyGames, 21, winningScore, id));
