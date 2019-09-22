import { connect } from "react-redux";
import Player from "./Player";
import { editPlayer } from "../../data/actions/state";
import { deletePlayer } from "../../data/actions/state"
import { editMode } from "../../data/actions/state"

const mapStateToProps = state => ({
    players: state.players,
}); 

const mapDispatchToProps = dispatch => ({
    handleEdit: (values, index) => dispatch(editPlayer(values, index)),
    handleDelete: (values, index) => dispatch(deletePlayer(values, index)),
    handleEditMode: (values, index) => dispatch(editMode(values, index)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);