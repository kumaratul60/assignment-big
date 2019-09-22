import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => ({
    settingsView: state.settingsView,
    tournamentView: state.tournamentView,
});

export default connect(mapStateToProps)(App);