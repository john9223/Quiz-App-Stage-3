import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import questionsData from "../resources/quizQuestion.json";

class QuizComponent extends Component {
    state = {
        questions: questionsData,
        currentIndex: 0,
        selectedOption: null,
        score: 0,
    };

    goToPrevious = () => {
        const { currentIndex } = this.state;
        const newIndex = Math.max(0, currentIndex - 1);
        this.setState({ currentIndex: newIndex });
    };

    goToNext = () => {
        const { currentIndex, questions } = this.state;
        const newIndex = Math.min(currentIndex + 1, questions.length - 1);
        this.setState({ 
            currentIndex: newIndex,
            selectedOption: null, 
        });
    };

    handleOptionChange = (option) => {
        const { questions, currentIndex, score } = this.state;
        const currentQuestion = questions[currentIndex];
        const isCorrect = currentQuestion.correctOption === option;

        if (isCorrect) {
            alert("Correct answer");
            this.setState({ score: score + 1 });
        } else {
            alert("Wrong answer");
        }

        this.setState({ selectedOption: option });
    };

    handleQuit = () => {
        if (window.confirm("Are you sure you want to quit?")) {
            this.props.history.push("/");
        }
    };

    handleFinish = () => {
        this.props.history.push({
            pathname: "/result",
            state: { score: this.state.score, totalQuestions: this.state.questions.length }
        });
    };

    render() {
        const { questions, currentIndex, selectedOption } = this.state;
        const currentQuestion = questions[currentIndex];
        return (
            <div className="quiz-container">
                <div className="quiz-subcontainer">
                    <h2>Question</h2>
                    <div className="ques-container">
                        <div className="ques-count">
                            <span>{currentIndex + 1} of {questions.length}</span>
                        </div>
                        <h4>{currentQuestion.question}</h4>
                        <ul className="options">
                            {['A', 'B', 'C', 'D'].map((option, index) => (
                                <li className="options-btn" key={index}>
                                    <input 
                                        type="radio" 
                                        id={`option${option}`} 
                                        name="answer" 
                                        value={`option${option}`} 
                                        checked={selectedOption === `option${option}`} 
                                        onChange={() => this.handleOptionChange(`option${option}`)} 
                                    />
                                    <label htmlFor={`option${option}`}>{currentQuestion[`option${option}`]}</label>
                                </li>
                            ))}
                        </ul>

                        <div className="navigation">
                            <button id="prev" onClick={this.goToPrevious}>Previous</button>
                            <button id="next" onClick={this.goToNext}>Next</button>
                            <button id="quit" onClick={this.handleQuit}>Quit</button>
                            <button id="finish" onClick={this.handleFinish}>Finish</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(QuizComponent);
