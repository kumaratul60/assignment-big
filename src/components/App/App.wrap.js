import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ settingsView, tournamentView, resultsView }) => ({
    // mapping these state props to make them available in wrapped component
    settingsView,
    tournamentView,
    resultsView,
});

export default connect(mapStateToProps)(App);