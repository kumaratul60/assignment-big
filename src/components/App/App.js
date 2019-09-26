import React from "react";
// import Component wrappers to gain access to their Components
import Header from "./../Header/Header.wrap";
import Settings from "./../Settings/Settings.wrap";
import Tournament from "./../Tournament/Tournament.wrap";
import Results from "./../Results/Results.wrap";

// destructure props passed in by Component wrapper
const App = ({ settingsView, tournamentView, resultsView }) => (
    <>
        <Header />
        {
            // only display the settings page if the settingsView prop mapped from state is set to true
            settingsView ? <Settings /> : null
        }
        {
            // only display the main tournament page if the tournamentView prop mapped from state is set to true
            tournamentView ? <Tournament /> : null
        }
        {
            // only display the main tournament page if the tournamentView prop mapped from state is set to true
            resultsView ? <Results /> : null
        }
        
    </>
);

export default App;
