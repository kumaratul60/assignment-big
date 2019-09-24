import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => ({
    // mapping these state props to make them available in wrapped component
    settingsView: state.settingsView,
    tournamentView: state.tournamentView,
});

export default connect(mapStateToProps)(App);