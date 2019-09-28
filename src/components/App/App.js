import React from "react";
// import Component wrappers to gain access to their Components
import Header from "./../Header/Header.wrap";
import Settings from "./../Settings/Settings.wrap";
import Round from "./../Round/Round.wrap";
import Results from "./../Results/Results.wrap";
// import bootstrap stylesheet
import "./../../css/bootstrap.min.css";
// import custom styling
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
            // only display the main games page if the gamesView prop true and tournamentComplete prop is false
            gamesView && !tournamentComplete ? <Round /> : null
        }
        {
            // only display the main games page if the resultsView prop mapped from state is set to true
            resultsView ? <Results /> : null
        }
        
    </>
);

export default App;
