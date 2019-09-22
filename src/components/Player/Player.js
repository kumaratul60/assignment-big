import React, { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: "",
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    handleEditMode(index) {
        this.props.handleEditMode(this.state, index);
        // TODO: add reducer function to change state property 'editMode' to true
    }

    handleChange(e) {
        this.setState({ newName: e.currentTarget.value });
    }

    handleEdit(e, index) {
        e.preventDefault();
        
        this.props.handleEdit(this.state, index);
        // TODO: add reducer function to update 'name' array item at x index 
        // NOTE: will need to pass the index of the array item 
    };

    handleDelete(index) {
        this.props.handleDelete(index);
        // TODO: add reducer function to delete 'name' array item at x index
    }

    render() {
        let { newName } = this.state;
        let { players, index } = this.props;
        return (
            
            !players[index].editMode ? (
                <li className="list-group-item">
                    <span className="d-inline-block">{ players[index].name }</span>
                    <span onClick={ () => this.handleDelete(index) } className="btn btn-danger float-right mx-2">Delete</span>
                    <span onClick={ () => this.handleEditMode(index) } className="btn btn-warning float-right mx-2">Edit</span>
                </li>
            ) : 
            (
                <li className="list-group-item">
                    <form onSubmit={ (e) => this.handleEdit(e, index) } className="form">
                        <div className="float-left">
                            <label htmlFor="editPlayer" className="help-block">Edit Player Name</label>
                            <input type="text" id="editPlayer" className="form-control" onChange={ this.handleChange } value={ newName } />
                            </div>
                        <button className="btn btn-warning float-right mx-2">Done</button>
                    </form>
                </li>
            )
        );
    };
};

export default Player;