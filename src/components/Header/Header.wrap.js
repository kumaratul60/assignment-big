import { connect } from "react-redux";
import Header from "./Header";
import { viewSettings, viewTournament, viewResults } from "./../../data/actions/state";

const mapStateToProps = ({ settingsView, gamesView }) => ({
    settingsView,
    gamesView,
});

const mapDispatchToProps = dispatch => ({
    handleSettings: values => dispatch(viewSettings(values)),
    handleTournament: values => dispatch(viewTournament(values)),
    handleResults: values => dispatch(viewResults(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)