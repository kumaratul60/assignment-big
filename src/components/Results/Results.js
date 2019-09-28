import React, { Component } from "react";

class Results extends Component {
    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    };

    handleReset() {
        this.props.reset();
    }

    render() {
        let { history } = this.props;
        // reverse the order of the copied history array so the final round displays at the top, not the bottom
        let reverseHistory = [...history];
        reverseHistory.reverse(); 

        // map over each round of games in the history array and output the scoreboard
        return (
            <>
                <div className="results">
                    <h3>Tournament Results</h3>
                    {
                        reverseHistory.map((round, index) => (
                            // react gave me a warning about having to use specific keys, and it seemed to not like `index`
                            // so in the absence of a better alternative, I used `index + Math.random()` to generate a unique key
                            <table key={ index + Math.random() } className="results-table">
                                <thead className="results-thead">
                                    <tr>
                                        <th style={ { width: "33%" } }>
                                            {
                                                // a neat trick to display the correct round name/number 
                                                // the history array has been reversed, and is zero indexed... 
                                                // index 0 will always be the final, index 1 = semifinals, index 2 = quarterfinals
                                                // thereafter we can use modulus on the history array to get the relative number of the remaining rounds
                                                index === 0 ? "Final" : index === 1 ? "Semifinals" : index === 2 ? "Quarterfinals" : `Round ${history.length % 3}`
                                            }
                                        </th>
                                        <th>Player 1</th>
                                        <th>Player 2</th>
                                    </tr>
                                </thead>
                                <tbody className="results-tbody">
                                    {
                                        // map over the games in each round 
                                        // output the player name and score
                                        round.map((game, index) => (

                                            <tr key={ index + Math.random() }>
                                                <th style={ { width: "33%" } }>Game { index + 1 }</th>
                                                {
                                                    game.map(player => (
                                                        <td key={ player.id } style={ { width: "33%" } }>
                                                            { player.name } &nbsp;
                                                        <span className="badge badge-pill badge-warning">{ player.score }</span>
                                                        </td>
                                                    ))
                                                }
                                            </tr>

                                        ))
                                    }
                                </tbody>
                            </table>
                        ))
                    }
                    <div className="page-options">
                        {/* I thought it would be a nice touch to be able to print the scoreboard as a record of the tournament */}
                        <button onClick={ () => window.print() } className="btn btn-primary">Print Results</button>
                        {/* this loads the start page and resets global state to initial state */}
                        <button onClick={ this.handleReset } className="btn btn-success">Start Over</button>
                    </div>
                </div>
            </>
        );
    }
    
};

export default Results;