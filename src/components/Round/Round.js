import React from "react";
import Game from "./../Game/Game.wrap";

const Round = ({ tournaments }) => {
    return (
        <>
            {
                tournaments.map((game, i) => (
                    <Game key={ i } game={ `Game ${i + 1}` } players={ game } />
                ))
            }
        </>
    );
};

export default Round;

