import React, { Component } from "react";
import Game from "./../Game/Game.wrap";

class Round extends Component {
    constructor(props) {
        super(props);
        this.handleNewRound = this.handleNewRound.bind(this);
        this.handleFinish = this.handleFinish.bind(this);
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
        let { tournament, done, round } = this.props;        

        return done ? null : (
            <>
                {
                    <h2 className="round-title">{ tournament.length === 1 ? "Final" : tournament.length === 2 ? "Semifinals" : tournament.length === 2 ? "Quarterfinals" : `Round ${round}` }</h2>
                }
                
                <div className="round-games" style={ tournament.length === 1 ? { display: "inherit" } : "" }>
                    {                
                        tournament.map((game, i) => (
                            <Game key={ i } game={ `Game ${i + 1}` } players={ game } />
                        ))
                    }
                </div>

                <div className="clearfix"></div>

                <div className="next-round">
                    {
                        tournament.length === 1 ?
                        <button
                            onClick={ this.handleFinish }
                            className="btn btn-primary">
                            Finish
                        </button> : 
                        <button
                            onClick={ this.handleNewRound }
                            className="btn btn-primary">
                            Next Round
                        </button> 
                    }
                </div>
            </>
        );
    }
    
};

export default Round;

