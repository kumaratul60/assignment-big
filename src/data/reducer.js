const newTournament = (state, { name }) => {
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
    return {
        ...state,
        players: [
            state.players[index] = {
                ...state.players[index],
                name: newName,
                editMode: false,
            }
        ],
    };
};

const deletePlayer = (state, { index }) => {
    return {
        ...state,
        players: state.players.splice(index, 1),
    };
};

const editMode = (state, { index }) => {
    return {
        ...state,
        players: [
            state.players[index] = {
                ...state.players[index],
                editMode: true,
            }
        ],
    };
};

const reducer = (state, action) => {    
    switch (action.type) {
        case "newTournament": return newTournament(state, action);
        case "editPlayer": return editPlayer(state, action);
        case "deletePlayer": return deletePlayer(state, action);
        case "editMode": return editMode(state, action);
        default: return state;
    }
}

export default reducer;