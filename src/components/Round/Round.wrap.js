import { connect } from "react-redux";
import Round from "./Round";
import { newRound, endTournament } from "./../../data/actions/state";

const mapStateToProps = state => ({
    tournament: state.tournament,
    winningScore: state.winningScore,
});

const mapDispatchToProps = dispatch => ({
    newRound: () => dispatch(newRound()),
    endTournament: () => dispatch(endTournament()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Round)