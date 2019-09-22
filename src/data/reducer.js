import { shuffle } from "./functions/shuffle";
import { split } from "./functions/split";

const newPlayer = (state, { name }) => {
    return {
        ...state,
        players: [
            ...state.players,
            {
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

const newTournament = state => {
    let newPlayers = [...state.players];
    
    return {
        ...state,
        tournaments: [
            ...split(shuffle(newPlayers))
        ],
        winningScore: state.winningScore,
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

const reducer = (state, action) => {    
    switch (action.type) {
        case "newPlayer": return newPlayer(state, action);
        case "editPlayer": return editPlayer(state, action);
        case "deletePlayer": return deletePlayer(state, action);
        case "editMode": return editMode(state, action);
        case "start": return newTournament(state, action);
        case "settings": return viewSettings(state, action);
        case "tournament": return viewTournament(state, action);
        default: return state;
    }
}

export default reducer;