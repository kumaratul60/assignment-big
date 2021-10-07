import React, { Component } from "react";
import Score from "./../Score/Score.wrap";
// import Table from "./../../images/ping-pong-table.png";

let gameBackground = {
  // backgroundImage: `url(${Table})`,
};

// destructure props passed in from parent component
class Game extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let { game, players } = this.props;

    return (
      // this component is accepting it's data from it's parent, which is iterating over the games array
      // this is the template for outputting the data for each game e.g. players
      <div className="game-container">
        <h4>{game}</h4>
        <div className="game" style={gameBackground}>
          {
            // map over each player per game including the Score component, which allows user to add a score for each player
            // by passing in the player id, score and played status, I'm able to make use of that data in the Score component when calling my score related functions in the reducer
            players.map((player) => (
              <div key={player.id} className="player">
                <h5 className="pt-2 text-light">{player.name}</h5>
                <Score
                  id={player.id}
                  score={player.score}
                  played={player.played}
                />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Game;
