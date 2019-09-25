import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleSettings = this.handleSettings.bind(this);
        this.handleTournament = this.handleTournament.bind(this);
        this.handleResults = this.handleResults.bind(this);
    };

    handleSettings() {
        this.props.handleSettings(this.state);
    };

    handleTournament() {
        this.props.handleTournament(this.state);
    };

    handleResults() {
        this.props.handleResults(this.state);
    };

    render() {
        return (
            <>
                <div className="page-header" >
                    <h2 className="m-2 text-center">Ping Pong Tournament Team Generator</h2>
                    <ul className="nav justify-content-center">
                        <li onClick={ this.handleSettings } className="nav-item m-2">Settings</li>
                        <li onClick={ this.handleTournament } className="nav-item m-2">Tournament</li>
                        <li onClick={ this.handleResults } className="nav-item m-2">Results</li>
                    </ul>
                </div>
            </>
        )
    };
};

export default Header;