import { connect } from "react-redux";
import Header from "./Header";
import { viewSettings, viewGames, viewResults } from "./../../data/actions/state";

const mapStateToProps = ({ settingsView, gamesView, resultsView }) => ({
    settingsView,
    gamesView,
    resultsView,
});

const mapDispatchToProps = dispatch => ({
    handleSettings: values => dispatch(viewSettings(values)),
    handleGames: values => dispatch(viewGames(values)),
    handleResults: values => dispatch(viewResults(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)