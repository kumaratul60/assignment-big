import React, { Component } from "react";
import Player from "./../Player/Player.wrap";

const isName = name => RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", "g").test(name);

const isPowerOf2 = n => {
    for (let i = 1; i < 10; i += 1) {
        if (Math.pow(2, i) === n) {
            return true;
        };
    }
    return false;
};

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            winningScore: 11,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleNameError = this.handleNameError.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
        this.handleWinningScore = this.handleWinningScore.bind(this);
        this.handlePlayersError = this.handlePlayersError.bind(this);
        this.handleSubmitPlayers = this.handleSubmitPlayers.bind(this);
    };

    // allows the user to edit the player name
    handleChangeName(e) {
        this.setState({ name: e.currentTarget.value });
    };

    // displays an error and resets the name field if name validation fails
    handleNameError(e) {
        e.preventDefault();
        this.setState({
            name: "",
        });
    };

    // this adds the player name to the players array in state 
    handleSubmitName(e) {
        e.preventDefault();
        this.setState({ name: "" });
        this.props.handleName(this.state);
    };

    // allows the user to change the winning score
    handleWinningScore(e) {
        this.setState({ winningScore: e.currentTarget.value });
    };
    
    // the number of players must be a power of 2 e.g. 2, 4, 8, 16, 32... 
    // TODO: it would be good if the app supported any number of players but this would have been a ton more functionality and there just wasn't time - a good idea for the 'features list'
    handlePlayersError(e) {
        e.preventDefault();
    };

    // this method calls the dispatch action and creates the first round of the new tournament
    handleSubmitPlayers(e) {
        e.preventDefault();
        this.props.handlePlayers(this.state);
    };
    
    render() {
        let { name, winningScore } = this.state;
        let { players } = this.props;

        let validName = isName(name.trim());
        let validPlayers = isPowerOf2(players.length)

        return (
            <>
                <div className="p-5 overflow-auto col-md-12">
                    <h3 className="text-center mb-3">New Tournament</h3>
                    <h5 className="text-center mb-3">Please add the names of all your players</h5>
                    <div className="container-settings">
                        <div>
                            <form onSubmit={ validName ? this.handleSubmitName : this.handleNameError } className="clearfix">
                                <div>
                                    <label htmlFor="names" className="help-block">Add Player</label>
                                    <input onChange={ this.handleChangeName } id="names" className="form-control" value={ name } />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Add</button>
                                { validName || !name ? null : <p className="alert alert-danger mt-3">Please enter a valid name</p> }
                                { validPlayers || players.length === 0 ? null : <p className="alert alert-warning mt-3">The number of players must be a power of 2 e.g. 2, 4, 8, 16, 32...</p> }
                                <p className="pt-4">The winner of the game is the first to reach the winning score (set below). To win, there must be a gap of at least 2 points between opponents.</p>
                            </form>

                            

                            <form onSubmit={ validPlayers ? this.handleSubmitPlayers : this.handlePlayersError } className="form mt-3 p-0">
                                <label htmlFor="winningScore" className="help-block">Select winning score</label>
                                <select onChange={ this.handleWinningScore } className="custom-select" value={ winningScore } id="winningScore">
                                    <option value="11">11</option>
                                    <option value="21">21</option>
                                </select>
                                <input type="submit" className="btn btn-success mt-3" value="Start" />
                            </form>
                        </div>
                        
                        {
                            // map over the players array in state to display the list of added players
                            // if players array is empty, display nothing 
                            players.length === 0 ? null :
                                <div>
                                    <ul className="list-group mt-3">
                                        {
                                            players.map((player, count) => (
                                                <Player key={ player.id } id={ player.id } name={ player.name } editMode={ player.editMode } count={ count } />
                                            ))
                                        }
                                    </ul>
                                </div>
                        }
                        
                    </div>
                </div>
            </>
        );
    }
};

export default Settings;