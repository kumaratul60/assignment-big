import { connect } from "react-redux";
import Game from "./Game";

// destructure tournaments state property and map into wrapped component as a prop 
const mapStateToProps = ({ tournaments }) => ({
    // there's no need to accept `state` as an argument and spell out `tournaments: state.tournaments`
    // because the key and value pair are identical, so we just write `tournaments` 
    tournaments,
});

export default connect(mapStateToProps)(Game)