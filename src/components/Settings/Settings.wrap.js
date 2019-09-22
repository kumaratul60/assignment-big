import { connect } from "react-redux";
import Settings from "./Settings";
import { newPlayer } from "../../data/actions/state";
import { newTournament } from "../../data/actions/state";

const mapStateToProps = state => ({
    players: state.players,
}); 

const mapDispatchToProps = dispatch => ({
    handleName: values => dispatch(newPlayer(values)),
    handleTournament: values => dispatch(newTournament(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)