// let tournament = [
//     [ { name: "Brian", score: 15 }, { name: "Isabella", score: 21 } ],
//     [ { name: "Lucas", score: 18 }, { name: "Simon", score: 21 } ],
//     [ { name: "Jonathan", score: 21 }, { name: "Louise", score: 18 } ],
//     [ { name: "Jane", score: 12 }, { name: "Martin", score: 21 } ],
// ];

// let winningScore = 21;

// a function to reduce the Tournament array in state (multiple games with 2 players in each and their respective scores), and output a single array of the winning players
// the next step is to shuffle and split the flat array to create a new round of games 

export const winners = (tournament, winningScore) => {
    let result = [];
    tournament.map(game => game.filter(player => player.score === winningScore ? result.push(player) : null));
    return result;
};

// console.log("tournament", tournament);
// console.log("winners", winners(tournament, winningScore));

