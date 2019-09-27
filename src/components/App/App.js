import React from "react";
// import Component wrappers to gain access to their Components
import Header from "./../Header/Header.wrap";
import Settings from "./../Settings/Settings.wrap";
import Round from "./../Round/Round.wrap";
import Results from "./../Results/Results.wrap";
import "./../../css/custom.css";

// destructure props passed in by Component wrapper
const App = ({ settingsView, tournamentView, resultsView, done }) => (
    <>
        <Header />
        {
            // only display the settings page if the settingsView prop mapped from state is set to true
            settingsView ? <Settings /> : null
        }
        {
            // only display the main tournament page if the tournamentView prop mapped from state is set to true
            tournamentView && !done ? <Round /> : null
        }
        {
            // only display the main tournament page if the tournamentView prop mapped from state is set to true
            resultsView ? <Results /> : null
        }
        
    </>
);

export default App;
