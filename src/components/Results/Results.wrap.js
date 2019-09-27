import { connect } from "react-redux";
import Results from "./Results";
import { viewSettings } from "./../../data/actions/state";

const mapStateToProps = ({ history, tournament, winningScore }) => ({
    history,
    tournament,
    winningScore
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(viewSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);