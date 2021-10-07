import { connect } from "react-redux";
import Settings from "./Settings";
import { newPlayer, newTournament } from "./../../data/actions/state";

const mapStateToProps = ({ players }) => ({
  players,
});

const mapDispatchToProps = (dispatch) => ({
  handleName: (values) => dispatch(newPlayer(values)),
  handlePlayers: (values) => dispatch(newTournament(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
