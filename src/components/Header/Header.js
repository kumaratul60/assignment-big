import React, { Component } from "react";
import Background from "./../../images/flow-2.jpg";

let headerStyle = {
    backgroundImage: `url(${ Background })`
}
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
                <div className="page-header p-3" style={ headerStyle }>
                    <h2 className="m-2 text-center">Ping Pong Bracket Generator</h2>
                    <ul className="nav justify-content-center">
                        <li onClick={ this.handleSettings } className="nav-item m-2">New Tournament</li>
                        <li onClick={ this.handleResults } className="nav-item m-2">Score Board</li>
                    </ul>
                </div>
            </>
        )
    };
};

export default Header;