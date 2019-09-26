import { connect } from "react-redux";
import Score from "./Score";
import { addScore } from "./../../data/actions/state";

const mapStateToProps = state => ({
    winningScore: state.winningScore,
    tournament: state.tournament,
});

const mapDispatchToProps = dispatch => ({
    handleScore: (values, id) => dispatch(addScore(values, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);