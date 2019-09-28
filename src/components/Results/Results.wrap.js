import { connect } from "react-redux";
import Results from "./Results";
import { viewSettings } from "./../../data/actions/state";

const mapStateToProps = ({ history, games, winningScore }) => ({
    history,
    games,
    winningScore
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(viewSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);