import { connect } from "react-redux";
import Settings from "./Settings";
import { postTournament } from "../../data/actions/state"

const mapStateToProps = state => ({
    players: state.players,
}); 

const mapDispatchToProps = dispatch => ({
    handle: values => dispatch(postTournament(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)