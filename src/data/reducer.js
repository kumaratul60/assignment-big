import { shuffle } from "./functions/shuffle";
import { split } from "./functions/split";
import { findGame, findGameIndex, findPlayerIndex } from "./functions/score";

const newPlayer = (state, { name }) => {
    return {
        ...state,
        counter: state.counter + 1,
        players: [
            ...state.players,
            {
                "id": state.counter + 1,
                "name": name,
                "editMode": false,
                "score": 0,
            }
        ],
    };
};

const editPlayer = (state, { newName, index }) => {
    let players = [...state.players]; 
    
    players.splice(index, 1, {
        name: newName,
        editMode: false,
    });
    
    return {
        ...state,
        players: players,
    };
};

const deletePlayer = (state, { index }) => {
    let players = [...state.players];
    players.splice(index, 1);

    return {
        ...state,
        players: players,
    };
};

const editMode = (state, { index }) => {
    let players = [...state.players];
    players[index].editMode = true;

    return {
        ...state,
        players: players,
    };
};

const newTournament = (state, { winningScore }) => {
    console.log(winningScore);
    
    let newPlayers = [...state.players];
    
    return {
        ...state,
        tournaments: [
            ...split(shuffle(newPlayers))
        ],
        winningScore: +winningScore,
        players: state.players,
        settingsView: false,
        tournamentView: true,
    };
};

const viewSettings = state => {
    return {
        ...state,
        settingsView: true,
        tournamentView: false,
    };
};

const viewTournament = state => {
    return {
        ...state,
        settingsView: false,
        tournamentView: true,
    };
};

const score = (state, { newScore, id }) => {
    console.log(state, +newScore, id);
    let tournament = state.tournaments;
    console.log(tournament);

    let gameArray = findGame(tournament, id);
    let gameIndex = findGameIndex(tournament, id);
    let playerIndex = findPlayerIndex(gameArray, id);

    let newTournament = [...tournament];
    newTournament[gameIndex][playerIndex].score = +newScore;

    return {
        ...state, 
        tournaments: [...newTournament]
    }
}

const reducer = (state, action) => {    
    switch (action.type) {
        case "newPlayer": return newPlayer(state, action);
        case "editPlayer": return editPlayer(state, action);
        case "deletePlayer": return deletePlayer(state, action);
        case "editMode": return editMode(state, action);
        case "start": return newTournament(state, action);
        case "settings": return viewSettings(state, action);
        case "tournament": return viewTournament(state, action);
        case "score": return score(state, action);
        default: return state;
    }
}

export default reducer;