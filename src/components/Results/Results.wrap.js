import { connect } from "react-redux";
import Results from "./Results";

const mapStateToProps = ({ history, tournament }) => ({
    history,
    tournament
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Results);