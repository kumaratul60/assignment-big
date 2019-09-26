import React from "react";
import "./../../css/bracket-styles.css";

let winner = game => game.reduce((winner, player) => player.score > winner.score ? player.id : winner.id);

// destructure props passed in from parent component
const Results = ({ history, tournament }) => {
    return (
        history.map(round => round.map(game => game.map(player => console.log(player.id, player.name, player.score))))

    )
};

export default Results;