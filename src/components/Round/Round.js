import React, { Component } from "react";
import Game from "./../Game/Game";

class Round extends Component {
    // constructor(props) {
    //     super(props);

    // }

    render() {
        let { tournaments } = this.props;
        
        return (
            <>
                {
                    tournaments.map((game, i) => (
                        <Game 
                            key={ i }
                            game={ `Game ${i + 1}` }
                            players={ game }
                        />
                    ))
                }
            </>
        );
    };
};

export default Round;

