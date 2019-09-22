import React from "react";
import Header from "./../Header/Header"
import Settings from "./../Settings/Settings.wrap";
import Tournament from "./../Tournament/Tournament.wrap";

const App = ({ settingsView, tournamentView }) => (
    <>
        <Header />
        { settingsView ? <Settings /> : null }
        { tournamentView ? <Tournament /> : null }
        
    </>
);

export default App;
