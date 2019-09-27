import React, { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props);
        // we can make use of onChange event handlers to update the mutable state within a controlled component 
        this.state = {
            newName: "",
            error: false,
        };
        this.handleEditMode = this.handleEditMode.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleNameError = this.handleNameError.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    // the handleEditMode method is called by the onSubmit event handler within the rendered form component when the user clicks the edit button 
    handleEditMode(id) {
        let {name } = this.props; 
        // the editMode prop is mapped from the component wrapper
        // when called it will dispatch the editPlayer action (see`Player.wrap.js`)
        // this class method is accepting the id prop as an argument and passing it into the prop function as a parameter
        // so the reducer function will know which player it should edit in the players array stored in global state
        this.props.editPlayerMode(this.state, id);
        this.setState({ newName: name });
    };

    // the handleChange method is used to update the mutable state property `newName` when the user is typing 
    handleChange(e) {
        // we set the state of newName to equal the current value of the input field 
        this.setState({ newName: e.currentTarget.value });
    };

    // the handleNameError method is called by the onSubmit event handler within the rendered form component 
    // when the user clicks the done button, and only if the input validation fails
    handleNameError(e) {
        e.preventDefault();
        this.setState({
            error: true,
            newName: "",
        });
        setTimeout(() => this.setState({ error: false }), 2000);
    };

    handleEdit(e, id) {
        e.preventDefault();
        this.props.editPlayer(this.state, id);
        this.setState({ error: false })
    };

    handleDelete(id) {
        // the handleDelete prop is mapped from the component wrapper
        // when called it will dispatch the deletePlayer action (see`Player.wrap.js`)
        // this class method is accepting the id prop as an argument and passing it into the prop function a parameter
        // so the reducer function will know which player it should delete from the players array stored in global state
        this.props.deletePlayer(id);
    };

    render() {
        let { newName, error } = this.state;
        let { id, name, editMode, count } = this.props; 
        // we can make use of regular expressions to validate form inputs, in this case a person's name
        const isName = name => RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", "g").test(name);

        return (
            <>
                {
                    !editMode ? 
                    // if the editMode property of the player object currently being mapped over is false, 
                    // we display the name of the player, along with the edit and delete buttons
                    <li className="list-group-item">
                            <span className="d-inline-block">{ count + 1 } .&nbsp; { name }</span>
                        <span onClick={ () => this.handleDelete(id) } className="btn btn-danger btn-sm float-right mx-2">Delete</span>
                        <span onClick={ () => this.handleEditMode(id) } className="btn btn-warning btn-sm float-right mx-2">Edit</span>
                    </li> :
                    // if the editMode property of the player object currently being mapped over is true, 
                    // we display a form to edit the name of the player, along with a done button
                    // validation check in ternary operator - if name input is valid, edit the name, otherwise generate error message 
                    <li className="list-group-item">
                        <form onSubmit={ isName(newName) ? (e) => this.handleEdit(e, id) : this.handleNameError } className="form">
                            <div className="float-left">
                                <label htmlFor="editPlayer" className="help-block">Edit Player Name</label>
                                <input type="text" id="editPlayer" className="form-control" onChange={ this.handleChange } value={ newName } />
                            </div>
                            <button className="btn btn-success btn-sm float-right mx-2">Done</button>
                        </form>
                    </li>
                }

                {
                    // display error message if name input was invalid 
                    !error ? null : <p className="alert alert-danger m-0 rounded-0">Please enter a valid name</p>
                }
            </>
        );
    };
};

export default Player;