import React, { Component } from "react";
// import Font Awesome package and icon(s) 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newScore: "",
            editScore: false,
            error: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        let { winningScore } = this.props;
        let score = e.currentTarget.value;
        this.setState({ 
            newScore: score,
            error: score < 0 || score > winningScore ? true : false
        })
    };

    handleError(e) {
        e.preventDefault();
        this.setState({ error: true, newScore: "" });
        setTimeout(() => this.setState({ error: false }), 1000);
    };

    handleSubmit(e, id) {
        e.preventDefault();
        this.props.handleScore(this.state, id);
        this.setState({ editScore: false });
    };

    render() {
        let { newScore, error } = this.state;
        let { id, score } = this.props;
        return (  
            <>
                {
                    score ? <h3>{ score }</h3> :
                
                    <form onSubmit={ error ? this.handleError : (e) => this.handleSubmit(e, id) }>
                        <label className="d-block">Add Score</label>
                        <input 
                            onChange={ this.handleChange } 
                            type="number" 
                            className={ `form-control col-sm-4 d-inline-block ${ error ? "border border-danger" : null }` } 
                            value={ newScore } 
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