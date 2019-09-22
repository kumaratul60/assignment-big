import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = state => ({
    tournaments: state.tournaments,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Game)