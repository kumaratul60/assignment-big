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
                // mapping over each player per game including the Score component, which allows user to add a score for each player
                // by passing in the player id, score and played status, I'm able to make use of that data in the Score component when calling my score related functions in the reducer 
                players.map(player => (

                        <div key={ player.id } className="col-sm-6 p-2 bg-success">
                            <h5 className="pt-2 text-light">{ player.name }</h5>
                        <Score id={ player.id } score={ player.score } played={ player.played } />
                        </div>

                ))
            }
            </div>
        </div>
    )
};

export default Game;