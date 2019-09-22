import React, { Component } from "react";

import Player from "./../Player/Player.wrap"

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.handle(this.state);
        this.setState({ name: "" });
    };

    // handleEdit(e) {
    //     e.preventDefault();
    //     this.props.handleEdit(this.state);
    // }
    
    render() {
        let { name } = this.state;
        let { players } = this.props;
        return (
            <>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="names" className="help-block">Add Player</label>
                    <input onChange={ this.handleChange } id="names" className="form-control" value={ name } />
                    <button type="submit" className="btn btn-primary mt-3">Add</button>
                </form>

                <ul className="list-group mt-3">
                    {
                        players.map((player, i) => (
                            <Player key={ i } index={ i } name={ player.name } />
                        ))
                    }
                </ul>
            </>
        );
    }
};

export default Settings;