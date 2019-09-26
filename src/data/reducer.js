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

const editPlayer = (state, { newName, id }) => {
    console.log(id);
    let players = [...state.players]; 
    let index = players.findIndex(player => player.id === id);
    console.log(index);
    
    players.splice(index, 1, {
        ...players[index],
        name: newName,
        editMode: false,
    });
    
    return {
        ...state,
        players: [
            ...players
        ],
    };
};

const deletePlayer = (state, { id }) => {
    let players = [...state.players];
    let index = players.findIndex(player => player.id === id);
    players.splice(index, 1);

    console.log(index);

    return {
        ...state,
        players: [
            ...players,
        ],
    };
};

const editMode = (state, { id }) => {
    let players = [...state.players];

    let index = players.findIndex(player => player.id === id);
    console.log(index);

    players[index].editMode = true;

    return {
        ...state,
        players: players,
    };
};

const newTournament = (state, { winningScore }) => {    
    let players = [...state.players];
    let newPlayers = split(shuffle(players));
    
    return {
        ...state,
        tournament: [
            ...newPlayers
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
    let tournament = newTournamentArray(state.tournament, id, +newScore);

    return {
        ...state,
        tournament: [
            ...tournament
        ],
    };
};

const history = state => {
    let tournament = [...state.tournament];

    return {
        ...state,
        history: [
            ...state.history,
            tournament,
        ],
    };
};

const newRound = state => {
    let tournament = [...state.tournament];
    let winningPlayers = winners(tournament, state.winningScore);
    winningPlayers.map(player => player.score = "");
    winningPlayers.map(player => player.played = false);
    let newPlayers = split(shuffle(winningPlayers));

    return {
        ...state,
        tournament: [
            ...newPlayers
        ],
    };
};

const endTournament = state => {
    let tournament = [...state.tournament];
    let winningScore = state.winningScore;
    let winningPlayers = winners(tournament, winningScore);

    return {
        ...state,
        tournament: [
            ...winningPlayers,
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
        case "NEW_ROUND": return newRound(history(state, action));
        case "END_TOURNAMENT": return endTournament(history(state, action));
        default: return state;
    }
}

export default reducer;