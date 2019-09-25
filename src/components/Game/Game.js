import React from "react";
import Score from "./../Score/Score.wrap";

// destructure props passed in from parent component
const Game = ({ game, players }) => {
    return ( 
        // this component is accepting it's data from it's parent, which is iterating over the tournament array
        // this is the template for outputting the data for each game e.g. players 
        <div className="col-sm-12 m-auto text-center">
            <h4>{ game }</h4>
            <div className="jumbotron d-flex justify-content-around p-2">
            {
                players.map((player, index) => (

                        <div key={ player.id } className="col-sm-6 p-2 bg-success">
                            <h5 className="pt-2 text-light">{ player.name }</h5>
                            <Score id={ player.id } score={ player.score } />
                        </div>

                ))
            }
            </div>
        </div>
    )
};

export default Game;