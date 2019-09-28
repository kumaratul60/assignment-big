import { shuffle } from "./functions/shuffle";
import { split } from "./functions/split";
import { newTournamentArray } from "./functions/score";
import { winners } from "./functions/winners";
import initial from "./initial";

const newPlayer = (state, { name }) => {
    return {
        ...state,
        idCounter: state.idCounter + 1,
        players: [
            ...state.players,
            {
                "id": state.idCounter + 1,
                "name": name,
                "editMode": false,
                "score": 0,
                "played": false,
            }
        ],
    };
};

const editPlayer = (state, { newName, id }) => {
    let players = state.players; 
    let index = players.findIndex(player => player.id === id);    
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
    let players = state.players;
    let index = players.findIndex(player => player.id === id);
    players.splice(index, 1);

    return {
        ...state,
        players: [
            ...players,
        ],
    };
};

const editMode = (state, { id }) => {
    let players = state.players;
    let index = players.findIndex(player => player.id === id);
    players[index].editMode = true;

    return {
        ...state,
        players: [
            ...players,
        ]
    };
};

const newTournament = (state, { winningScore }) => {    
    let players = state.players;
    let newPlayers = split(shuffle(players));
    
    return {
        ...state,
        games: [
            ...newPlayers,
        ],
        winningScore: winningScore,
        settingsView: false,
        gamesView: true,
    };
};

const viewSettings = () => {
    return {
        ...initial,
        settingsView: true,
        gamesView: false,
        resultsView: false,
    };
};

const viewTournament = state => {
    return {
        ...state,
        settingsView: false,
        gamesView: true,
        resultsView: false,
    };
};

const viewResults = state => {
    return {
        ...state,
        settingsView: false,
        gamesView: false,
        resultsView: true,
    };
};

const score = (state, { newScore, id }) => {
    let round = state.games;
    let updatedTournament = newTournamentArray(round, id, +newScore);

    return {
        ...state,
        games: [
            ...updatedTournament
        ],
    };
};

const history = state => {
    
    return {
        ...state,
        history: [
            ...state.history,
            state.games,
        ],
    };
};

const newRound = state => {
    let round = state.games;
    let filterWinners = winners(round);
    let resetPlayed = filterWinners.map(player => ({
        ...player,
        played: false,
        score: 0,
    }));    
    let shuffleWinners = shuffle(resetPlayed);
    let newRound = split(shuffleWinners);

    return {
        ...state,
        games: newRound,
        roundCounter: state.roundCounter + 1,
    };
};

const endTournament = state => {

    return {
        ...state,
        settingsView: false,
        gamesView: false,
        resultsView: true,
        completed: true,
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
        case "HISTORY": return history(state, action);
        case "END_TOURNAMENT": return endTournament(state, action);
        default: return state;
    }
}

export default reducer;