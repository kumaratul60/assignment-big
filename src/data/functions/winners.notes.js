let games = [
    [
        {
            id: 2,
            name: 'Samuel',
            editMode: false,
            score: 11,
            played: true
        },
        {
            id: 1,
            name: 'David',
            editMode: false,
            score: 9,
            played: true
        }
    ],
    [
        {
            id: 3,
            name: 'Richard',
            editMode: false,
            score: 12,
            played: true
        },
        {
            id: 0,
            name: 'Jonathan',
            editMode: false,
            score: 10,
            played: true
        }
    ]
];

let winningScore = 21;

// a function to reduce the Games array in state (multiple games with 2 players in each and their respective scores), and output a single array of the winning players
// the next step is to shuffle and split the flat array to create a new round of games 

const winners = (games) => {
    return games.map(game => game.reduce((winner, player) => player.score > winner.score ? player : winner));
};

console.log("games", games);
console.log("winners", winners(games));

