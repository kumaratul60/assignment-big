import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ settingsView, tournamentView, resultsView, done }) => ({
    // mapping these state props to make them available in wrapped component
    settingsView,
    tournamentView,
    resultsView,
    done,
});

export default connect(mapStateToProps)(App);