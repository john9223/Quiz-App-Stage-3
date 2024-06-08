import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class HomeComponent extends Component {
  handlePlay = () => {
    this.props.history.push("/quiz");
  };

  render() {
    return (
      <div className="main">
        <h1>Quiz App</h1>
        <button onClick={this.handlePlay}>Play</button>
      </div>
    );
  }
}

export default withRouter(HomeComponent);
