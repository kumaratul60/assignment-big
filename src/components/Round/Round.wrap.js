import { connect } from "react-redux";
import Round from "./Round";
import { newRound, endTournament, history } from "./../../data/actions/state";

const mapStateToProps = ({
  games,
  winningScore,
  tournamentComplete,
  roundComplete,
  roundCounter,
}) => ({
  games,
  winningScore,
  tournamentComplete,
  roundComplete,
  roundCounter,
});

const mapDispatchToProps = (dispatch) => ({
  newRound: () => dispatch(newRound()),
  endTournament: () => dispatch(endTournament()),
  history: () => dispatch(history()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Round);
