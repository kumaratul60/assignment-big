import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = ({ settingsView, gamesView, resultsView, completed }) => ({
    // mapping these state props to make them available in wrapped component
    settingsView,
    gamesView,
    resultsView,
    completed,
});

export default connect(mapStateToProps)(App);