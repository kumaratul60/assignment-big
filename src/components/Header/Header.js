import React, { Component } from "react";


let headerStyle = {
  // import the header image
  // backgroundImage: `url(${Background})`,
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSettings = this.handleSettings.bind(this);
    this.handleGames = this.handleGames.bind(this);
    this.handleResults = this.handleResults.bind(this);
  }

  handleSettings() {
    // switch to the new tournament view
    this.props.handleSettings(this.state);
  }

  handleGames() {
    // switch to the games view
    this.props.handleGames(this.state);
  }

  handleResults() {
    // switch to the results view
    this.props.handleResults(this.state);
  }

  render() {
    let { settingsView, gamesView, resultsView } = this.props;
    // display the header
    // use the headerStyle object to apply background image using inline styles
    // create a nav menu which allows user to flick between views, on certain conditions
    return (
      <>
        <div className="page-header p-3" style={headerStyle}>
          <h2 className="m-2 text-center">Table-Tannis Tournament</h2>
          {settingsView ? null : (
            <ul className="nav justify-content-center">
              <li onClick={this.handleSettings} className="nav-item m-2">
                New Tournament
              </li>
              {gamesView || resultsView ? null : (
                <li onClick={this.handleResults} className="nav-item m-2">
                  Score Board
                </li>
              )}
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default Header;
