import React, { Component } from "react";
import Player from "./../Player/Player.wrap"

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            winningScore: "",
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmitName = this.handleSubmitName.bind(this);
        this.handleChangeScore = this.handleChangeScore.bind(this);
        this.handleSubmitTournament = this.handleSubmitTournament.bind(this);
    }

    handleChangeName(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleSubmitName(e) {
        e.preventDefault();
        this.props.handleName(this.state);
        this.setState({ name: "" });
    };

    handleChangeScore(e) {
        this.setState({ winningScore: e.currentTarget.value })
    }

    handleSubmitTournament(e) {
        e.preventDefault();
        this.props.handleTournament(this.state);
    }
    
    render() {
        let { name, winningScore } = this.state;
        let { players } = this.props;
        return (
            <>
                <form onSubmit={ this.handleSubmitName }>
                    <label htmlFor="names" className="help-block">Add Player</label>
                    <input onChange={ this.handleChangeName } id="names" className="form-control" value={ name } />
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                </form>

                <ul className="list-group mt-3 col-sm-6 float-left">
                    {
                        players.map((player, i) => (
                            <Player key={ i } index={ i } name={ player.name } />
                        ))
                    }
                </ul>

                <form onSubmit={ this.handleSubmitTournament } className="form col-sm-6 mt-3 p-0 float-right">
                    <select onChange={ this.handleChangeScore } className="custom-select" value={ winningScore }>
                        <option>Select winning score</option>
                        <option defaultValue="11">11</option>
                        <option defaultValue="21">21</option>
                    </select>

                    <button className="btn btn-success mt-3" >Create Tournament</button>
                </form>
            </>
        );
    }
};

export default Settings;