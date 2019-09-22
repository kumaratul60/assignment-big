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
    // console.log(split(shuffle(state.players)));
    // let teams = split(shuffle(state.players));
    // console.log(teams);
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
    }
};

const reducer = (state, action) => {    
    switch (action.type) {
        case "newPlayer": return newPlayer(state, action);
        case "editPlayer": return editPlayer(state, action);
        case "deletePlayer": return deletePlayer(state, action);
        case "editMode": return editMode(state, action);
        case "start": return newTournament(state, action);
        default: return state;
    }
}

export default reducer;