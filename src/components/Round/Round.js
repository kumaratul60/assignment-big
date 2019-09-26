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
        this.props.newRound();
    };

    handleFinish(e) {
        e.preventDefault();
        this.props.endTournament();
    };

    render() {
        let { tournament } = this.props;

        return (
            <>
                {
                    tournament.map((game, i) => (
                        <Game key={ i } game={ `Game ${i + 1}` } players={ game } />
                    ))
                }

                {
                    tournament.length === 1 && tournament[0][0].played && tournament[0][1].played ?
                    <button
                        onClick={ this.handleFinish }
                        className="btn btn-primary">
                        Finish
                    </button> : 
                    tournament.length === 1 && (!tournament[0][0].played || !tournament[0][1].played) ? null :
                    <button
                        onClick={ this.handleNewRound }
                        className="btn btn-primary">
                        Next Round
                    </button> 
                }
            </>
        );
    }
    
};

export default Round;

