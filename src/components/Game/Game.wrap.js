import { connect } from "react-redux";
import Game from "./Game";

// destructure games state property and map into wrapped component as a prop 
const mapStateToProps = ({ games }) => ({
    // there's no need to accept `state` as an argument and spell out `games: state.games`
    // because the key and value pair are identical, so we just write `games` 
    games,
});

export default connect(mapStateToProps)(Game)