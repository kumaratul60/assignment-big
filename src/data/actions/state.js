export const newPlayer = values => {    
    return {
        type: "NEW_PLAYER",
        ...values,
    };
};

export const editPlayer = (values, index) => {
    console.log(index);
    
    return {
        type: "EDIT_PLAYER",
        ...values, 
        index,
    };
};

export const deletePlayer = (values, index) => {
    return {
        type: "DELETE_PLAYER",
        ...values,
        index,
    };
};

export const editMode = (values, index) => {
    return {
        type: "EDIT_MODE",
        ...values,
        index,
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

export const viewTournament = values => {
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