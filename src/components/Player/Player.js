import React, { Component } from "react";

class Player extends Component {
    constructor(props) {
        super(props);
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

    handleEditMode(index) {
        this.props.handleEditMode(this.state, index);
    };

    handleChange(e) {
        this.setState({ newName: e.currentTarget.value });
    };

    handleNameError(e) {
        e.preventDefault();
        this.setState({
            error: true,
            newName: "",
        });
        setTimeout(() => this.setState({ error: false }), 2000);
    };

    handleEdit(e, index) {
        e.preventDefault();
        this.props.handleEdit(this.state, index);
        this.setState({ error: false })
    };

    handleDelete(index) {
        this.props.handleDelete(index);
    };

    render() {
        let { newName, error } = this.state;
        let { players, index } = this.props;
        const isName = name => RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", "g").test(name);

        return (
            <>
                {
                    !players[index].editMode ?
                    <li className="list-group-item">
                        <span className="d-inline-block">{ players[index].name }</span>
                        <span onClick={ () => this.handleDelete(index) } className="btn btn-danger btn-sm float-right mx-2">Delete</span>
                        <span onClick={ () => this.handleEditMode(index) } className="btn btn-warning btn-sm float-right mx-2">Edit</span>
                    </li> :
                    <li className="list-group-item">
                        <form onSubmit={ isName(newName) ? (e) => this.handleEdit(e, index) : this.handleNameError } className="form">
                            <div className="float-left">
                                <label htmlFor="editPlayer" className="help-block">Edit Player Name</label>
                                <input type="text" id="editPlayer" className="form-control" onChange={ this.handleChange } value={ newName } />
                            </div>
                            <button className="btn btn-success btn-sm float-right mx-2">Done</button>
                        </form>
                    </li>
                }

                { !error ? null : <p className="alert alert-danger m-0 rounded-0">Please enter a valid name</p> }
            </>
        );
    };
};

export default Player;