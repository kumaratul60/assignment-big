import React, { Component } from "react";
import Player from "./../Player/Player.wrap";

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            winningScore: "",
            errorName: false,
            errorTournament: false,
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleNameError = this.handleNameError.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
        this.handleChangeScore = this.handleChangeScore.bind(this);
        this.handleTournamentError = this.handleTournamentError.bind(this);
        this.handleSubmitTournament = this.handleSubmitTournament.bind(this);
    };

    handleChangeName(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleNameError(e) {
        e.preventDefault();
        this.setState({
            errorName: true,
            name: "",
        });
        setTimeout(() => this.setState({ errorName: false }), 4000);
    };

    handleSubmitName(e) {
        e.preventDefault();
        this.setState({ name: "" });
        this.props.handleName(this.state)
    };

    handleChangeScore(e) {
        this.setState({ winningScore: e.currentTarget.value })
    };
    
    handleTournamentError(e) {
        e.preventDefault();
        this.setState({ errorTournament: true });
        setTimeout(() => this.setState({ errorTournament: false }), 4000);
    };

    handleSubmitTournament(e) {
        e.preventDefault();
        this.props.handleTournament(this.state);
        this.setState({ errorTournament: false });
    };
    
    render() {
        let { name, winningScore, errorTournament, errorName } = this.state;
        let { players } = this.props;

        const isName = name => RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", "g").test(name);

        const isPowerOf2 = n => {
            for (let i = n; i >= 2; i / 2) {                
                return (i / 2) % 2 === 0;
            };
        };

        return (
            <>
                <form onSubmit={ isName(name) ? this.handleSubmitName : this.handleNameError } >
                    <label htmlFor="names" className="help-block">Add Player</label>
                    <input onChange={ this.handleChangeName } id="names" className="form-control" value={ name } />
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                    { !errorName ? null : <p className="alert alert-danger mt-3">Please enter a valid name.</p> }
                </form>

                <ul className="list-group mt-3 col-sm-6 float-left">
                    {
                        players.map((player, i) => (
                            <Player key={ i } index={ i } name={ player.name } />
                        ))
                    }
                </ul>

                <form onSubmit={ isPowerOf2(players.length) ? this.handleSubmitTournament : this.handleTournamentError } className="form col-sm-6 mt-3 p-0 float-right">
                    <label className="help-block">Select winning score</label>
                    <select onChange={ this.handleChangeScore } className="custom-select" value={ winningScore }>
                        <option defaultValue="11">11</option>
                        <option defaultValue="21">21</option>
                    </select>

                    <button className="btn btn-success mt-3">Create Tournament</button>
                    { !errorTournament ? null : <p className="alert alert-danger mt-3">The number of players must be n<sup>2</sup> (4, 8, 16, 32 etc)</p> }
                
                </form>
            </>
        );
    }
};

export default Settings;