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
