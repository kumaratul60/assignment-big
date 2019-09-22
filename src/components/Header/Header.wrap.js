import { connect } from "react-redux";
import Header from "./Header";
import { viewSettings } from "./../../data/actions/state";
import { viewTournament } from "./../../data/actions/state";

const mapDispatchToProps = dispatch => ({
    handleSettings: values => dispatch(viewSettings(values)),
    handleTournament: values => dispatch(viewTournament(values)),
});

export default connect(null, mapDispatchToProps)(Header)