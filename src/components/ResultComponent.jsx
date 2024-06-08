import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ResultComponent extends Component {
  handlePlayAgain = () => {
    this.props.history.push("/quiz");
  };

  handleBackToHome = () => {
    this.props.history.push("/");
  };

  render() {
    const { state } = this.props.location;
    const score = state?.score || 0;
    const totalQuestions = state?.totalQuestions || 0;
    const attemptedQuestions = totalQuestions;

    return (
      <>
        <div className="result-container">
            <div className="result-subContainer">
                <h1 className="heading">Result</h1>
                <div className="resultBoard">
                  <h3 className="pratice">{score / totalQuestions >= 0.5 ? "Well Done!" : "You need more practice"}</h3>
                  <h1 className="score">Your Score is {(score / totalQuestions) * 100}%</h1>

                  <p className="result">No of questions <span className="nos">{totalQuestions}</span></p>
                  <p className="result"> No of attempted questions <span className="nos">{attemptedQuestions}</span></p>
                  <p className="result">No of correct questions <span className="nos">{score}</span></p>
                  <p className="result">No of wrong questions <span className="nos">{attemptedQuestions - score}</span></p>
                </div>
                <div className="buttons-result">
                  <button className="play-again" onClick={this.handlePlayAgain}>Play Again</button>
                  <button className="home-button" onClick={this.handleBackToHome}>Back to Home</button>
                </div>
            </div>
        </div>    
      </>
    );
  }
}

export default withRouter(ResultComponent);
