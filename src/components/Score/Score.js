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

    // this method reads the score input field and updates the score for each player 
    handleChange(e) {
        let { winningScore, games, id } = this.props;
        let score = e.currentTarget.value;

        this.setState({
            newScore: score,
            // error validation is performed on the score as it's entered by the user 
            // the score of one player is compared to the entered score of the opponent
            // all standard ping-pong scoring logic applies e.g. player must win by at least 2 points, 
            // winning score increments 2 points above winning score, one player must win etc. 
            // this function funs a series of checks to validate the input 
            // function details and all validation checks are here: "./../../data/functions/score.notes.js"
            error: valid(games, +score, winningScore, id),
        });
    };

    // if the onChange validation fails but the user still tries to click the Add button, 
    // the ternary check inside the onSubmit event handler will call this method
    handleError(e) {
        e.preventDefault();
        this.setState({ error: true, newScore: "" });
        setTimeout(() => this.setState({ error: false }), 1000);
    };

    // if the onChange validation succeeds, this method is called when the user clicks the Add button
    handleSubmit(e, id) {
        e.preventDefault();
        // the handleScore action is triggered, sending an action to the reducer to update the player's score 
        this.props.handleScore(this.state, id);
        // we then reset the local state to avoid the score appearing on the new page 
        this.setState({ newScore: "" });
    };

    render() {
        let { newScore, error } = this.state;
        let { id, score, played } = this.props;
        return (
            <>
                {
                    // TODO: in the future I'd like to be able to edit the score after adding it

                    // if the player's score has already been entered, the score is displayed here...
                    played ? <h1>{ score }</h1> :
                        // else we display the input form to the user
                        // if there's an error with the score, the respective methods are called (as detailed above)
                        <form onSubmit={ error ? this.handleError : (e) => this.handleSubmit(e, id) }>
                            <label
                                htmlFor="score"
                                className="d-block"
                            >
                                Total Score
                            </label>
                            {/* if the score fails validation, the input field has a red border */}
                            <input
                                id="score"
                                onChange={ this.handleChange }
                                type="number"
                                className={ `form-control col-sm-4 d-inline-block ${error ? "border border-danger" : ""}` }
                                value={ newScore }
                                required
                            />
                            <button type="submit" className="btn m-2">
                                <FontAwesomeIcon icon={ faPlus } />
                            </button>
                        </form>
                }
            </>
        );
    };
};

export default Score;