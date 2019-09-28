import { connect } from "react-redux";
import Score from "./Score";
import { addScore } from "./../../data/actions/state";

const mapStateToProps = state => ({
    winningScore: state.winningScore,
    games: state.games,
});

const mapDispatchToProps = dispatch => ({
    handleScore: (values, id) => dispatch(addScore(values, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);