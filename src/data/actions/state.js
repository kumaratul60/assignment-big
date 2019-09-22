export const newPlayer = values => {    
    return {
        type: "newPlayer",
        ...values
    };
};

export const editPlayer = (values, index) => {
    console.log(index);
    
    return {
        type: "editPlayer",
        ...values, 
        index
    };
};

export const deletePlayer = (values, index) => {
    return {
        type: "deletePlayer",
        ...values,
        index
    };
};

export const editMode = (values, index) => {
    return {
        type: "editMode",
        ...values,
        index
    };
};

export const newTournament = values => {
    return {
        type: "start",
        ...values,
    };
};

export const viewSettings = values => {
    return {
        type: "settings",
        ...values,
    };
};

export const viewTournament = values => {
    return {
        type: "tournament",
        ...values,
    };
};