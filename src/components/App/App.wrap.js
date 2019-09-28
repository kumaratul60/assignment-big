import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ settingsView, gamesView, resultsView, tournamentComplete }) => ({
    // mapping these state props to make them available in wrapped component
    settingsView,
    gamesView,
    resultsView,
    tournamentComplete,
});

export default connect(mapStateToProps)(App);