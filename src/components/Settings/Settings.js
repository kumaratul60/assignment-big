import React, { Component } from "react";

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ name: e.currentTarget.value });
    };

    handleSubmit(e) {
        console.log(this.state);
        
        e.preventDefault();
        this.props.handle(this.state);
    };
    
    render() {
        let { names } = this.state;
        return (
            <>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="names" className="help-block">Add Player</label>
                    <input onChange={ this.handleChange } id="names" className="form-control" value={ names } />
                    <button type="submit" className="btn btn-primary mt-3">New Tournament</button>
                </form>

                
            </>
        );
    }
};

export default Settings;