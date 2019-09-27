import { shuffle } from "./functions/shuffle";
import { split } from "./functions/split";
import { newTournamentArray } from "./functions/score";
import { winners } from "./functions/winners";
import initial from "./initial";

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
        tournament: [
            ...newPlayers,
        ],
        winningScore: winningScore,
        settingsView: false,
        tournamentView: true,
    };
};

const viewSettings = () => {
    return {
        ...initial,
        settingsView: true,
        tournamentView: false,
        resultsView: false,
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
    let round = state.tournament;
    let updatedTournament = newTournamentArray(round, id, +newScore);

    return {
        ...state,
        tournament: [
            ...updatedTournament
        ],
    };
};

const history = state => {
    
    return {
        ...state,
        history: [
            ...state.history,
            state.tournament,
        ],
    };
};

const newRound = state => {
    let round = state.tournament;
    console.log(round);
    
    let filterWinners = winners(round);
    console.log(filterWinners);
    
    let resetPlayed = filterWinners.map(player => {
        return {
            ...player,
            played: false,
            score: 0,
        }
    });
    console.log(resetPlayed);
    
    let shuffleWinners = shuffle(resetPlayed);
    console.log(shuffleWinners);
    
    let newRound = split(shuffleWinners);
    console.log(newRound);    

    return {
        ...state,
        tournament: newRound,
        round: state.round + 1,
    };
};

const endTournament = state => {

    return {
        ...state,
        settingsView: false,
        tournamentView: false,
        resultsView: true,
        done: true,
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