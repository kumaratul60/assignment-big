let tournament = [
    [ { name: "Brian", score: 11 }, { name: "Isabella", score: 9 } ],
    [ { name: "Lucas", score: 15 }, { name: "Simon", score: 13 } ],
    [ { name: "Jonathan", score: 13 }, { name: "Louise", score: 11 } ],
    [ { name: "Jane", score: 8 }, { name: "Martin", score: 11 } ],
];

let winningScore = 21;

// a function to reduce the Tournament array in state (multiple games with 2 players in each and their respective scores), and output a single array of the winning players
// the next step is to shuffle and split the flat array to create a new round of games 

const winners = (tournament, winningScore) => {
    return tournament.map(game => game.reduce((winner, player) => player.score > winner.score ? player : winner));
};

console.log("tournament", tournament);
console.log("winners", winners(tournament, winningScore));

