import React, { Component } from "react";

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        let { game, players } = this.props;

        return (
            <>
                <div className="col-sm-12 m-auto text-center">
                    <h4>{ game }</h4>
                    <div className="jumbotron d-flex justify-content-around p-2">
                        <div className="col-sm-5 p-2 bg-success">
                            <h5 className="pt-2 text-light">{ players[0].name }</h5>
                            <button className="btn btn-light btn-sm">+</button>
                        </div>
                        <div className="col-sm-2 p-2 bg-dark">
                            <h5 className="pt-2 text-light">vs.</h5>
                        </div>
                        <div className="col-sm-5 p-2 bg-success">
                            <h5 className="pt-2 text-light">{ players[1].name }</h5>
                            <button className="btn btn-light btn-sm">+</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Name;