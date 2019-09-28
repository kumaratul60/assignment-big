export const newPlayer = values => {    
    return {
        type: "NEW_PLAYER",
        ...values,
    };
};

export const editPlayer = (values, id) => {
    
    return {
        type: "EDIT_PLAYER",
        ...values, 
        id,
    };
};

export const deletePlayer = (id) => {
    return {
        type: "DELETE_PLAYER",
        id,
    };
};

export const editMode = (values, id) => {
    return {
        type: "EDIT_MODE",
        ...values,
        id,
    };
};

export const newTournament = values => {
    return {
        type: "START",
        ...values,
    };
};

export const viewSettings = values => {
    return {
        type: "SETTINGS",
        ...values,
    };
};

export const viewGames = values => {
    return {
        type: "TOURNAMENT",
        ...values,
    };
};

export const viewResults = values => {
    return {
        type: "RESULTS",
        ...values,
    };
};

export const addScore = (values, id) => {
    return {
        type: "SCORE",
        ...values,
        id,
    };
};

export const newRound = () => {
    return {
        type: "NEW_ROUND",
    };
};

export const endTournament = () => {
    return {
        type: "END_TOURNAMENT",
    };
};

export const history = () => {
    return {
        type: "HISTORY",
    };
};