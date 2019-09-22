import { connect } from "react-redux";
import Round from "./Round";

const mapStateToProps = state => ({
    tournaments: state.tournaments,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Round)