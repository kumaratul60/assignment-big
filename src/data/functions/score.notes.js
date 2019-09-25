let tournament = [
    [{ id: 3, name: 'Susan', editMode: false, score: 0 }, { id: 2, name: 'Richard', editMode: false, score: 0 }],
    [{ id: 4, name: 'Peter', editMode: false, score: 0 }, { id: 5, name: 'Rick', editMode: false, score: 0 }],
    [{ id: 0, name: 'Jonathan', editMode: false, score: 0 }, { id: 7, name: 'Joan', editMode: false, score: 0 }],
];

const findGame = (array, id) => (array.filter(game => game.find(player => player.id === id)))[0];
const findPlayer = (array, id) => array.find(player => player.id === id);
const findGameIndex = (array, id) => array.findIndex(game => game.find(player => player.id === id));
const findPlayerIndex = (array, id) => array.findIndex(player => player.id === id);

let id = 5;

let gameArray = findGame(tournament, id);
let playerObj = findPlayer(gameArray, id);
let gameIndex = findGameIndex(tournament, id);
let playerIndex = findPlayerIndex(gameArray, id);

let newTournament = [...tournament];
newTournament[gameIndex][playerIndex].score = 21;

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
console.log(`new score for player id ${id}:`, (tournament[gameIndex])[playerIndex].score, `\n`);
// new score for player id 5: 21 
console.log("return tournament with updated score:", `\n`, newTournament);
// return tournament with updated score:
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
