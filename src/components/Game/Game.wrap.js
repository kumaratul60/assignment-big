import { connect } from "react-redux";
import Game from "./Game";

// destructure tournament state property and map into wrapped component as a prop 
const mapStateToProps = ({ tournament }) => ({
    // there's no need to accept `state` as an argument and spell out `tournament: state.tournament`
    // because the key and value pair are identical, so we just write `tournament` 
    tournament,
});

export default connect(mapStateToProps)(Game)