// the purpose of this function to shuffle an array
// the application of this functon is to take an array of player objects and shuffle them into a random order

export const shuffle = players => {

    let currentIndex = players.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = players[currentIndex];
        players[currentIndex] = players[randomIndex];
        players[randomIndex] = temporaryValue;
    }

    return players;
};