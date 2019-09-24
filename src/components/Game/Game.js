import React from "react";
// import Font Awesome package and icon(s) 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// destructure props passed in from parent component
const Name = ({ game, players }) => {
    return ( 
        // this component is accepting it's data from it's parent, which is iterating over the tournament array
        // this is the template for outputting the data for each game e.g. players 
        <>
            {/* I wondered about mapping over the players array, but decided to replicate the div for both players in order to display the 'vs.' in between */}
            <div className="col-sm-12 m-auto text-center">
                <h4>{ game }</h4>
                <div className="jumbotron d-flex justify-content-around p-2">
                    <div className="col-sm-5 p-2 bg-success">
                        <h5 className="pt-2 text-light">{ players[0].name }</h5>
                        <button className="btn btn-light btn-sm text-dark">
                            <FontAwesomeIcon icon={ faPlus } />
                        </button>
                    </div>
                    <div className="col-sm-2 p-2 bg-dark" style={ { maxWidth: "80px" } }>
                        <h5 className="pt-2 text-light">vs.</h5>
                    </div>
                    <div className="col-sm-5 p-2 bg-success">
                        <h5 className="pt-2 text-light">{ players[1].name }</h5>
                        <button className="btn btn-light btn-sm text-dark">
                            <FontAwesomeIcon icon={ faPlus } />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Name;