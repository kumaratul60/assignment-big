const newTournament = (state, { name }) => {
    return {
        ...state,
        players: [
            ...state.names,
            name
        ],
    }
}

const reducer = (state, action) => {    
    switch (action.type) {
        case "newTournament": return newTournament(state, action);
        default: return state;
    }
}

export default reducer;