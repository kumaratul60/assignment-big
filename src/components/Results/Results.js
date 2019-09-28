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
        let reverseHistory = [...history];
        reverseHistory.reverse();

        return (
            <>
                <div className="results">
                    <h3>Tournament Results</h3>
                    {
                        reverseHistory.map((round, index) => (
                            <table key={ index + Math.random() } className="results-table">
                                <thead className="results-thead">
                                    <tr>
                                        <th style={ { width: "33%" } }>
                                            { index === 0 ? "Final" : index === 1 ? "Semifinals" : index === 2 ? "Quarterfinals" : `Round ${history.length % 3}` }
                                        </th>
                                        <th>Player 1</th>
                                        <th>Player 2</th>
                                    </tr>
                                </thead>
                                <tbody className="results-tbody">
                                    {
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
                        <button onClick={ () => window.print() } className="btn btn-primary">Print Results</button>
                        <button onClick={ this.handleReset } className="btn btn-success">Start Over</button>
                    </div>
                </div>
            </>
        );
    }
    
};

export default Results;