import { connect } from "react-redux";
import Settings from "./Settings";
import { newPlayer } from "../../data/actions/state"

const mapStateToProps = state => ({
    players: state.players,
}); 

const mapDispatchToProps = dispatch => ({
    handle: values => dispatch(newPlayer(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)