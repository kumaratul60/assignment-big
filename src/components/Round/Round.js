import React, { Component } from "react";
import Game from "./../Game/Game.wrap";

class Round extends Component {
    constructor(props) {
        super(props);
        this.state = {
            end: this.props.tournament.length === 1,
        };
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
    }

    render() {
        let { tournament } = this.props;
        let { end } = this.state;

        return (
            <>
                {
                    tournament.map((game, i) => (
                        <Game key={ i } game={ `Game ${i + 1}` } players={ game } />
                    ))
                }

                <button
                    onClick={ end ? this.handleFinish : this.handleNewRound }
                    className="btn btn-primary">
                    { end ? "Finish" : "New Round" }
                </button>
            </>
        );
    }
    
};

export default Round;

