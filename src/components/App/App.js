import React from "react";
// import Component wrappers to gain access to their Components
import Header from "./../Header/Header.wrap";
import Settings from "./../Settings/Settings.wrap";
import Round from "./../Round/Round.wrap";
import Results from "./../Results/Results.wrap";
import "./../../css/bootstrap.min.css";
import "./../../css/style.min.css";

// destructure props passed in by Component wrapper
const App = ({ settingsView, gamesView, resultsView, tournamentComplete }) => (
    <>
        <Header />
        {
            // only display the settings page if the settingsView prop mapped from state is set to true
            settingsView ? <Settings /> : null
        }
        {
            // only display the main games page if the gamesView prop mapped from state is set to true
            gamesView && !tournamentComplete ? <Round /> : null
        }
        {
            // only display the main games page if the gamesView prop mapped from state is set to true
            resultsView ? <Results /> : null
        }
        
    </>
);

export default App;
