export const postTournament = values => {
    console.log(values);
    
    return {
        type: "newTournament",
        ...values
    };
};