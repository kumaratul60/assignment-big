import { connect } from "react-redux";
import Round from "./Round";
import { newRound, endTournament, history } from "./../../data/actions/state";

const mapStateToProps = state => ({
    tournament: state.tournament,
    winningScore: state.winningScore,
    done: state.done,
    round: state.round,
});

const mapDispatchToProps = dispatch => ({
    newRound: () => dispatch(newRound()),
    endTournament: () => dispatch(endTournament()),
    history: () => dispatch(history()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Round)