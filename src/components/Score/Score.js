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

    componentDidMount() {
        window.scrollTo(0, 0);
    };

    // this method reads the score input field and updates the score for each player 
    handleChange(e) {
        let score = e.currentTarget.value;
        
        this.setState({
            newScore: score,
        });
    };

    // if the onChange validation fails but the user still tries to click the Add button, 
    // the ternary check inside the onSubmit event handler will call this method
    handleError(e) {
        e.preventDefault();
        this.setState({ newScore: "" });
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
        let { newScore } = this.state;
        let { id, score, played, winningScore, games } = this.props;
        // error validation is performed on the score as it's entered by the user 
        // the score of one player is compared to the entered score of the opponent
        // all standard ping-pong scoring logic applies e.g. player must win by at least 2 points, 
        // winning score increments 2 points above winning score, one player must win etc. 
        // this function funs a series of checks to validate the input 
        // function details and all validation checks are here: "./../../data/functions/score.notes.js"
        let validScore = valid(games, newScore, winningScore, id);
        return (
            <>
                {
                    // TODO: the ability to edit the score after adding it

                    // if the player's score has already been entered, the score is displayed here...
                    played ? <><p>Total score</p><h1>{ score }</h1></> :
                        // else we display the input form to the user
                        // if there's an error with the score, the respective methods are called (as detailed above)
                        <form onSubmit={ validScore ? (e) => this.handleSubmit(e, id) : this.handleError }>
                            <label htmlFor="score" className="d-block">Add total score</label>
                            {/* if the score fails validation, the input field has a red border */}
                            <input
                                id="score"
                                onChange={ this.handleChange }
                                type="number"
                                className={ `form-control col-sm-4 d-inline-block ${validScore || !newScore ? "" : "border border-danger"}` }
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