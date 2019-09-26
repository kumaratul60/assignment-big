import { shuffle } from "./functions/shuffle";
import { split } from "./functions/split";
import { newTournamentArray } from "./functions/score";
import { winners } from "./functions/winners";

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
                "score": "",
                "played": false,
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
    let newPlayers = [...state.players];
    
    return {
        ...state,
        tournament: [
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
        resultsView: false,
    };
};

const viewResults = state => {
    return {
        ...state,
        settingsView: false,
        tournamentView: false,
        resultsView: true,
    };
};

const score = (state, { newScore, id }) => {
    let tournament = newTournamentArray(state.tournament, id, newScore);

    return {
        ...state,
        tournament: [...tournament]
    };
};

const newRound = state => {
    let newPlayers = winners(state.tournament, state.winningScore);

    newPlayers.map(player => player.score = "");
    newPlayers.map(player => player.played = false);

    return {
        ...state,
        tournament: [
            ...split(shuffle(newPlayers))
        ],
        history: [
            ...state.history,
            state.tournament
        ]
    };
};

const endTournament = state => {
    
    return {
        ...state,
        tournament: [
            ...winners(state.tournament, state.winningScore)
        ],
        history: [
            ...state.history,
            state.tournament
        ],
        settingsView: false,
        tournamentView: false,
        resultsView: true,
    };
};

const reducer = (state, action) => {    
    switch (action.type) {
        case "NEW_PLAYER": return newPlayer(state, action);
        case "EDIT_PLAYER": return editPlayer(state, action);
        case "DELETE_PLAYER": return deletePlayer(state, action);
        case "EDIT_MODE": return editMode(state, action);
        case "START": return newTournament(state, action);
        case "SETTINGS": return viewSettings(state, action);
        case "TOURNAMENT": return viewTournament(state, action);
        case "RESULTS": return viewResults(state, action);
        case "SCORE": return score(state, action);
        case "NEW_ROUND": return newRound(state, action);
        case "END_TOURNAMENT": return endTournament(state, action);
        default: return state;
    }
}

export default reducer;