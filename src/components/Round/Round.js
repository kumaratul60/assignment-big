import React, { Component } from "react";
import Game from "./../Game/Game.wrap";

class Round extends Component {
    constructor(props) {
        super(props);
        this.handleNewRound = this.handleNewRound.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    };

    handleNewRound(e) {
        e.preventDefault();
        this.props.history();
        this.props.newRound();
    };

    handleFinish(e) {
        e.preventDefault();
        this.props.history();
        this.props.endTournament();
    };

    render() {
        let { games, tournamentComplete, roundCounter, roundComplete } = this.props;

        // if the tournament is complete, this view will not render 
        return tournamentComplete ? null : (
            <>
                {
                    // this is a similar idea to the results table, only here we're not using a reversed array
                    // every time a new round is completed, the roundCounter property in state increases by 1
                    // if the length of the games array is 1, there are 2 players, which means it's the final round
                    // if the games array length is 2, there are 4 players, which means it's the semifinals round
                    // if the games arary length is 4, there are 8 players, which means it's the quarterfinals round
                    // if the games array is any other length, then the round does not have a special name, so we output roundCounter
                    <h2 className="round-title">{ games.length === 1 ? "Final" : games.length === 2 ? "Semifinals" : games.length === 4 ? "Quarterfinals" : `Round ${roundCounter}` }</h2>

                }

                <p className="text-center p-3">Add the total score for a player. Save the score with the orange button. Repeat for each player.</p>

                <div className="round-games" style={ games.length === 1 ? { display: "inherit" } : null }>
                    {
                        games.map((game, i) => (
                            <Game key={ i } game={ `Game ${i + 1}` } players={ game } />
                        ))
                    }
                </div>

                <div className="clearfix"></div>

                <div className="next-round">
                    {
                        // every time a new score is added, my reducer checks to see if all players in that round have scored 
                        // if yes, one of the buttons below is displayed, else hidden 
                        // moving to the next round before all scores have been recorded would break the app 
                        roundComplete ?
                            // if games array length is 1, then it's the last round, so display the Finish button
                            // else, display the next round button  
                            games.length === 1 ?
                                // the finish button calls the class method, which dispatches 2 actions 
                                // the first action, history, saves the last round into history 
                                // the second action, endTournament, switches the view to the scoreboard
                                <button onClick={ this.handleFinish } className="btn btn-primary">Finish</button> :
                                // the next round button calls the corresponding class method, which dispatches 2 actions
                                // the first action is as above
                                // the second action, newRound, triggers a complex set of functions...
                                // that filters the winners, shuffles them into a new array and splits them into pairings
                                <button onClick={ this.handleNewRound } className="btn btn-primary">Next Round</button> : null
                    }
                </div>
            </>
        );
    }

};

export default Round;

