import React, { Component } from "react";
// import Font Awesome package and icon(s) 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { valid } from "./../../data/functions/score";

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newScore: "",
            error: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        let { winningScore, tournament, id } = this.props;
        let score = e.currentTarget.value;

        this.setState({
            newScore: +score,
            error: valid(tournament, +score, winningScore, id),
        });
    };

    handleError(e) {
        e.preventDefault();
        this.setState({ error: true, newScore: "" });
        setTimeout(() => this.setState({ error: false }), 1000);
    };

    handleSubmit(e, id) {
        e.preventDefault();
        this.props.handleScore(this.state, id);

    };

    render() {
        let { newScore, error } = this.state;
        let { id, score, winningScore, tournament, played } = this.props;
        return (  
            <>
                {
                    played ? <h3>{ score }</h3> :
                
                        <form onSubmit={ error || valid(tournament, +newScore, winningScore, id) ? this.handleError : (e) => this.handleSubmit(e, id) }>
                        <label className="d-block">Add Score</label>
                        <input 
                            onChange={ this.handleChange } 
                            type="number" 
                            className={ `form-control col-sm-4 d-inline-block ${ error ? "border border-danger" : null }` } 
                            value={ newScore } 
                            required
                        />
                        <button type="submit" className="btn btn-primary btn-sm m-2">
                            <FontAwesomeIcon icon={ faPlus } />
                        </button>
                    </form>
                }
            </>
        );
    };
};

export default Score;