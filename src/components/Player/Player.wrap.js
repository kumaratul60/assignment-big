import { connect } from "react-redux";
import Player from "./Player";
import { editPlayer, deletePlayer, editMode } from "./../../data/actions/state";

const mapStateToProps = state => ({
    players: state.players,
}); 

const mapDispatchToProps = dispatch => ({
    // this updates the name of the player in state 
    editPlayer: (values, id) => dispatch(editPlayer(values, id)),
    deletePlayer: (id) => dispatch(deletePlayer(id)),
    // editMode allows me to update what's displayed in the Player component when the user clicks 'Edit' next to each player name
    // by changing the editMode for a specific player in the 'players' array in state, the user is able to update a single player's name by the player's id
    editPlayerMode: (values, id) => dispatch(editMode(values, id)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);